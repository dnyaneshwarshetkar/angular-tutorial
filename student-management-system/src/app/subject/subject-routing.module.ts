import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { SubjectContainerComponent } from './components/subject-container/subject-container.component';

const routes: Routes = [{
  path: "",
  component: SubjectContainerComponent,
  children: [{
    path: "add-subject",
    component: AddSubjectComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
