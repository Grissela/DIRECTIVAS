import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ResaltarDirective } from '../directives/resaltar.directive';



@NgModule({
  declarations: [
    HomeComponent,
    ResaltarDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    HomeComponent,
    ResaltarDirective
  ]
})
export class PagesModule { }
