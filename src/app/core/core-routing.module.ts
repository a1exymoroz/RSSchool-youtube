import { AuthLoadGuard } from './../shared/guards/auth-load.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './../shared/guards/auth.guard';
import { UndefinedComponent } from './pages/undefined/undefined.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule),
    // canLoad: [AuthLoadGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: UndefinedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
