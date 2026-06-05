import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { ListaUsuarios } from '../../components/lista-usuarios/lista-usuarios';
import { DescuentoPipe } from '../../pipes/descuento-pipe';
import { Usuarios } from './usuarios';
import { UsuarioDetalle } from './usuario-detalle/usuario-detalle';

@NgModule({
  declarations: [
    Usuarios,
    UsuarioDetalle
  ],
  imports: [
    CommonModule, 
    UsuariosRoutingModule,
    ListaUsuarios,
    DescuentoPipe
  ],
})
export class UsuariosModule {}
