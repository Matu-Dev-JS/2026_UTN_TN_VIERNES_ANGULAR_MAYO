import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Usuarios } from '../../../services/usuarios';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.html',
  styleUrl: './usuario-detalle.css',
  standalone: false
})
export class UsuarioDetalle implements OnInit {
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  //ES EL SERVICIO
  private usuariosService = inject(Usuarios)

  usuario: Usuario | undefined
  errorMsg = ''

  ngOnInit(): void {
    //Acceder al id del usuario de la URL
    const id_user_param = this.route.snapshot.paramMap.get('id')
    if(id_user_param){
      const id = parseInt(id_user_param)

      //Llamar al metodo getUserById y obtener el usuario
      this.usuario = this.usuariosService.getById(id)
      if(!this.usuario){
        this.errorMsg = `Usuario con ID #${id} no encontrado.`
      }
    }
    else{
      this.errorMsg = 'ID del usuario no especificado'
    }
  }

  volver (): void{
    this.router.navigate(['/usuarios'])
  }
}
