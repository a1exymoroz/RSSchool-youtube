import { SortModule } from './../sort/sort.module';
import { SearchModule } from './../search/search.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [CommonModule, SearchModule, SortModule, SharedModule],
})
export class HeaderModule {}
