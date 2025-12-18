import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;
  total: number | null = null;
  error: string = '';

  calcularTotal() {
    this.error = '';
    this.total = null;

    // Validación numérica
    if (
      this.cantidad === null ||
      this.precio === null ||
      isNaN(this.cantidad) ||
      isNaN(this.precio)
    ) {
      this.error = 'Cantidad y precio deben ser numéricos';
      return;
    }

    if (this.cantidad <= 0 || this.precio <= 0) {
      this.error = 'Los valores deben ser mayores a cero';
      return;
    }

    this.total = this.cantidad * this.precio;
  }
}
