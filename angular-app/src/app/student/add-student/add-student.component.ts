import { Component } from '@angular/core';
import { Student } from '../interfaces/student';

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

 studentList:Array<Student> = [{
  firstName: "John",
  lastName: "Doe",
  mobile: "+919767837781",
  age: 23,
  email: "johndoe@gmail.com"
 },{
  firstName: "Umesh",
  lastName: "Sadhu",
  mobile: "+919090909090",
  age: 23,
  email: "umesh@gmail.com",
  gender: "MALE"
 },
 {
  firstName: "Manisha",
  lastName: "Rajput",
  mobile: "+919767837781",
  age: 23,
  email: "manisha@gmail.com",
  gender: "FEMALE"
 }];

 ifTrue = false;

 showDiv(ev:any){
  this.ifTrue = true;
 }
 toggleDiv(ev:any){
  this.ifTrue = !this.ifTrue;
 }

 isGender = "FEMALE";
 level = "ABC";
}
