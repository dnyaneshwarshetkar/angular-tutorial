import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
 heading = "Add Student Form";
 h1ClassList = "background";

 getId(){
  return "student-header";
 }

 buttonClicked(e:any){
  console.log(e);

  alert("You clicked A Button");
 }

 mouseOver = false;
 mouseOverHandler(e:MouseEvent){
  console.log(e);
  this.mouseOver = true;
 }
 mouseOutHandler(e:MouseEvent){
  this.mouseOver = false;
 }
}
