import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    return [{
      name: "Suresh",
      gender: "MALE",
      email: "suresh@gmail.com"
    },{
      name: "Mahesh",
      gender: "MALE",
      email: "mahesh@gmail.com"
    }]
  }
}
