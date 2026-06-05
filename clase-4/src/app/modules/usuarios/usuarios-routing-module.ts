import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetalle } from './usuario-detalle/usuario-detalle';
import { Usuarios } from './usuarios';

const routes: Routes = [
  {
    path: '',
    component: Usuarios
  },
  {
    path: ':id',
    component: UsuarioDetalle
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
