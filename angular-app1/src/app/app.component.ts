import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NgIf } from '@angular/common';
import { StudentModule } from './student/student.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet, 
  ProductComponent,
  StudentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  friendName = "John Doe";
  a = 5;
  c = 7;

  add(a:number,b:number){
    return a + b;
  }

  heading = "This is heading";
}
