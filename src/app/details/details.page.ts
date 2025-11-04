import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para @if e | currency
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonSpinner,    // Para o loading
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg          // Para a imagem
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common'; // 1. Importar o CurrencyPipe

// Use a lâmpada (💡) nesta linha se o caminho estiver errado
import { ApiService } from '../services/api.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe, // 2. Adicionar o CurrencyPipe
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
  ],
})
export class DetailsPage implements OnInit {

  public produto: any = null; // 3. Guarda o produto (não mais o produtoId)
  public isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService // 4. Injeta o ApiService
  ) {}

  ngOnInit() {
    // Pega o ID da URL
    const id = this.route.snapshot.paramMap.get('id');

    // Se tivermos um ID, busca na API
    if (id) {
      this.api.getProduto(Number(id)).subscribe(
        (data: any) => {
          this.produto = data;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Erro ao buscar produto:', error);
          this.isLoading = false;
        }
      );
    }
  }

}

