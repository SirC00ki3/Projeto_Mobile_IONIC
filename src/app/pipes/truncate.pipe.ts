import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate', // O nome que usaremos no HTML: | truncate
  standalone: true  // Importante para componentes standalone
})
export class TruncatePipe implements PipeTransform {

  /**
   * Recebe um texto (value) e um limite (limit).
   * Se o texto for maior que o limite, corta e adiciona "..."
   */
  transform(value: string, limit: number = 50): string {
    if (!value) {
      return '';
    }

    // Se o texto for menor ou igual ao limite, retorna o texto original
    if (value.length <= limit) {
      return value;
    }

    // Se for maior, corta no limite e adiciona "..."
    return value.substring(0, limit) + '...';
  }
}