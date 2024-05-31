import { Routes } from '@angular/router';
import { BackupComponent } from './backup/backup.component';

export const routes: Routes = [{
    path: "backup",
    component: BackupComponent
}, {
    path: "student",
    loadChildren: () => import("./student/student.module").then(m=>m.StudentModule)
},{
    path: "subject",
    loadChildren: () => import("./subject/subject.module").then(m=>m.SubjectModule)
}];
