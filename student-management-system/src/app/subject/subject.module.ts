import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';


@NgModule({
  declarations: [AddSubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
