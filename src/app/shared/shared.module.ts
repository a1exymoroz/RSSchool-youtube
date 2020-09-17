import { HumanViewPipe } from './human-view.pipe';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DateDirective } from './directive/date.directive';
import { CommonModule } from '@angular/common';

const angularMaterial = [MatInputModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [CommonModule, ...angularMaterial],
  declarations: [DateDirective],
  exports: [...angularMaterial, DateDirective],
})
export class SharedModule {}
