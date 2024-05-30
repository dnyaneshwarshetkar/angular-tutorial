import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentModule } from '../student/student.module';

@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule,
    StudentModule
  ],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent {
  h2Title = "This is h2";
  title = 'student-management-system';
  a = 2;
  b = 10;
  html = "<strong>My name is John Doe</strong>";

  getFullName(){
    return "John Doe";
  }

  buttonCLicked(ev:any){
    alert("You clicked me");
  }

  ifMouseOver = false;
  mouseOverHandler(ev:any){
    console.log(ev);
    this.ifMouseOver = true;
  }

  mouseOutHandler(ev:any){
    this.ifMouseOver = false;

  }
  studentList = [{
    name: "John Doe",
    gender: "Male",
    dob: "24-10-2021",
    percentage: 70
  },{
    name: "Mahesh Das",
    gender: "Male",
    dob: "26-02-1957",
    percentage: 90
  },{
    name: "Suresh Kulkarni",
    gender: "Male",
    dob: "30-12-1999",
    percentage: 35
  },{
    name: "Mahesh Kulkarni",
    gender: "Male",
    dob: "30-12-1999",
    percentage: 80
  }];

  hasPermission = false;

  toggleHasPermission(ev:any){
    this.hasPermission = !this.hasPermission;
  }

  num1 = 20;

  num2 = 5; //10,20,30.40

  // FOrm Variable
  student = {
    userName : "John Doe",
    dob : "",
    email : "",
    mobile : ""
  }

  bGColor = 6;

  
  // FOrm Variable
  student1 = {
    title : "Student Details",
    name : "Geeta Joshi",
    email : "geetajoshi@gmail.com",
    mobile : "7812347898"
  }

  destroy = false;
  buttonClickedEventHandler(ev:any){
    console.log(ev);
    alert(ev);
    this.destroy = true;
  }

  currentDate = new Date();

  heading = "This is HEADING";
  
}
