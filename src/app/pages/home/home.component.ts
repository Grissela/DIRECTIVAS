import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Formulario!: FormGroup;
  nombre!:string;
  valido="Gracias por comunicarnos con nosotros";
  respuesta!:string;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.Formulario = this.formBuilder.group(
      {
        name:['',
          [
            Validators.required,
            Validators.minLength(12)
          ]

        ]
      }
    )
  }

  send():any{
    if(this.Formulario.valid)
    this.respuesta="Gracias por comunicarnos con nosotros";
    else
    this.respuesta="Los campos no deben estar vacios";
  }

}
