import { Routes } from '@angular/router';
import { Inicial } from './components/inicial/inicial';


/* 
ACA es donde marcamos las rutas existentes en la aplicacion
*/
export const routes: Routes = [
    {
        //En la ruta principal mostramos el componente incial
        path: '',
        component: Inicial
    },
    {
        path: 'usuarios',

        //Solo cargamos el usuariosModule cuando el usuario se encuentre en la ruta de usuarios
        loadChildren: () => import('./modules/usuarios/usuarios-module').then(
            (modules) => modules.UsuariosModule
        )
        
    },
    {
        //Si entran a una ruta no existente enviar a direccion principal
        path: '**',
        redirectTo: ''
    }
];
