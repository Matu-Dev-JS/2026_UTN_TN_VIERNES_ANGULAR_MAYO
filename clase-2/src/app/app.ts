import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Declaramos que tenemos la propiedad register form
  register_form: FormGroup

  //Este constructor se invocara al instanciar el componente
  //Recien ahi angular nos pasara la el objeto formBuilder
  constructor(private formBuilder: FormBuilder){
    this.register_form = this.formBuilder.group({
      nombre: [''],
      email: [''],
      password: [''],
      edad: [null]
    });
  }


  submitRegisterForm(){
    console.log(
      "Se envio el formulario de registro", 
      this.register_form.value
    )
  }
}