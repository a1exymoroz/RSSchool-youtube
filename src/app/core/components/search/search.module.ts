import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: [SearchComponent],
})
export class SearchModule {}
