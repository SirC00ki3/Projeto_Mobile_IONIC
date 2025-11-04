import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para @if, @for, currency
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

// Use a lâmpada (💡) nestas 3 linhas se o caminho estiver errado
import { ApiService } from '../services/api.service'; // <-- CORRIGIDO
// 1. IMPORTAR A DIRETIVA
import { HighlightDirective } from '../directives/highlight.directive'; 
import { TruncatePipe } from '../pipes/truncate.pipe'; // <-- CORRIGIDO

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    TruncatePipe,
    IonGrid,
    IonRow,
    IonCol,
    HighlightDirective 
  ],
})
export class HomePage implements OnInit {
  
  public produtos: any[] = [];
  public isLoading: boolean = true;

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.isLoading = true;

    this.api.getProdutos().subscribe(
      (data: any) => {
        this.produtos = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('ERRO AO BUSCAR DADOS:', error);
        this.isLoading = false;
      }
    );
  }

  verDetalhes(id: number) {
    this.router.navigate(['/details', id]);
  }
}

