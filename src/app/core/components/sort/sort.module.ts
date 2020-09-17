import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SortComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: [SortComponent],
})
export class SortModule {}
