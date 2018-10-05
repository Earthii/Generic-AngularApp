import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule]
})
export class SharedModule {}
