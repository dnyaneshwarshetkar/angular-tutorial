import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-backup',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>backup works!</p>`,
    styleUrl: './backup.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackupComponent { }
