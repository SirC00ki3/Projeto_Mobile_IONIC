import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common'; // Para @if, @for, pipes
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Para a navegação

// Importações dos componentes Standalone do Ionic
import {
  IonHeader,
  IonToolbar,
  IonButtons, // <-- RESOLVE O ERRO
  IonTitle,
  IonIcon,    // <-- NECESSÁRIO PARA OS ÍCONES
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

// Importe seu serviço de API
import { ApiService } from '../services/api.service';

// Importe os ícones que você está usando
import { addIcons } from 'ionicons';
import { 
  searchOutline, 
  personOutline, 
  cartOutline,
  arrowBackOutline,
  arrowForwardOutline,
  carOutline,
  cardOutline,
  headsetOutline,
  lockClosedOutline 
} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Para @if, @for
    FormsModule,
    CurrencyPipe,  // Para | currency
    TitleCasePipe, // Para | titlecase

    // Lista de componentes Ionic
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonIcon,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class HomePage implements OnInit {
  
  public produtos: any[] = [];
  public isLoading = true;

  constructor(
    private api: ApiService,
    private router: Router
  ) {
    // Registra os ícones globalmente
    addIcons({
      searchOutline,
      personOutline,
      cartOutline,
      arrowBackOutline,
      arrowForwardOutline,
      carOutline,
      cardOutline,
      headsetOutline,
      lockClosedOutline
    });
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.isLoading = true;
    this.api.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
        this.isLoading = false;
      }
    );
  }

  // Função para ver detalhes (você já deve ter)
  verDetalhes(id: number) {
    this.router.navigate(['/details', id]);
  }
}