import { Routes } from '@angular/router';
import { BackupComponent } from './backup/backup.component';

export const routes: Routes = [{
    path: "backup",
    component: BackupComponent
}, {
    path: "student",
    loadChildren: () => import("./student/student.module").then(m=>m.StudentModule)
}];
