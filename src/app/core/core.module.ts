import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './pages/core/core.component';
import { UndefinedComponent } from './pages/undefined/undefined.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoreComponent, UndefinedComponent, AdminComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
