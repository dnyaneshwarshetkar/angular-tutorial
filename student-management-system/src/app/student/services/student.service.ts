import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }
  // to get all students
  getStudents(){
    return this.http.get("http://localhost:3000/students")
  }

  // get single student
  getStudentById(id:string){
    return this.http.get(`http://localhost:3000/students/${id}`);
  }

  // Create Student

  createStudent(student:any){
    return this.http.post("http://localhost:3000",student);
  }

  //Update Student

  updateStudentById(id:string, student:any){
    return this.http.patch(`http://localhost:3000/students/${id}`,student)
  }

  // Delete Student

  deleteStudentById(id:string){
    return this.http.delete(`http://localhost:3000/students/${id}`);
  }


}
