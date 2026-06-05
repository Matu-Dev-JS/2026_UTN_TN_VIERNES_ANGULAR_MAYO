import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaUsuarios } from './components/lista-usuarios/lista-usuarios';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLinkWithHref
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private router = inject(Router)
  ngOnInit(): void {
    //Al cargar el App quiero saber cual fue la ultima direccion visitada

    //Obtener del localstorage la ultima ruta
    const last_route = localStorage.getItem(LOCALSTORAGE_LAST_VISIT_ROUTE_KEY)

    //Si existe alguna ruta previa guardada y no es la principal ir a esa ruta
    if(last_route && last_route !== '/'){
      this.router.navigateByUrl(last_route)
    }

    //Guardar en localStorage el ultimo modulo o seccion visitada

    //Solo me interesa enterarme del evento de cierre de navegacion
    this.router.events.pipe(
      filter(
        (event): event is NavigationEnd =>  event instanceof NavigationEnd
      )
    )
    .subscribe(
      (event: NavigationEnd) => {
        //La ultima direccion la guardamos en localstorage
        localStorage.setItem(LOCALSTORAGE_LAST_VISIT_ROUTE_KEY, event.urlAfterRedirects)
      }
    )
  }
}

const LOCALSTORAGE_LAST_VISIT_ROUTE_KEY = 'lastVisitedRoute'