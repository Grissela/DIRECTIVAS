import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactForm!:FormGroup;
 
  
  
  constructor(private readonly fb: FormBuilder){}

  // Ahora el this.contactForm estara en this.initForm
  ngOnInit():void{
    this.contactForm = this.initForm();
    
  }

  // la funcion onsubmit, señalando que es al formulario llamado contactForm
  onSubmit():void{
    console.log('Form ->', this.contactForm.value)
  }

  // aqui ya se hace la validacion
  initForm(): FormGroup {
    return this.fb.group({
      name: ['',
       [Validators.required, 
        Validators.minLength(5)
       ]
      ],
      mail: 
      ['', 
      [Validators.required,
      Validators.email
      ]
    ],
     phone: 
      ['', 
      [Validators.required,
      Validators.maxLength(9)
      ]
    ],
      asunto: ['',
      [Validators.required,
       Validators.maxLength(20)
        ]
    ],
      comment: ['', [Validators.required]],
    });
  }

}
