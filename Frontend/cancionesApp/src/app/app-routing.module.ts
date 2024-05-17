import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { InicioComponent } from './panel/inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'aplicacion', component: InicioComponent, loadChildren: () => import('./panel/panel-routing.module').then(m => m.PanelRoutingModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
