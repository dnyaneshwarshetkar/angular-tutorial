import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  
  @Input() title: string = "";
  @Input() name: string = "";
  @Input() mobile: string = "";
  @Input() email: string = "";
  @Output() buttonClicked = new EventEmitter<string>();
  constructor(){
    console.log("Invoked Constructor");
  }

  ngOnInit(){
    console.log("Invoked ngOnInit");
  }

  ngOnChanges(){
    console.log("Invoked ngOnCHanges");
  }

  ngAfterViewInit(): void {
      console.log("Invoked ngAfter View Init");
  }


  ngOnDestroy(){
    console.log("Invoked ngOnDestroy");
  }

  

  buttonClickEventHandler(ev:any){
    this.buttonClicked.emit("Button clicked");
  }
}
