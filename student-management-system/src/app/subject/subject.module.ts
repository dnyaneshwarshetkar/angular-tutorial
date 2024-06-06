import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { SubjectContainerComponent } from './components/subject-container/subject-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddSubjectComponent, SubjectContainerComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
