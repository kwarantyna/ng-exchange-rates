import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';


@NgModule({
    imports: [
        TableModule,
        SelectButtonModule,
        ButtonModule,
        CalendarModule,
        MessagesModule,
        MessageModule,
        ToastModule
    ],
    exports: [
        TableModule,
        SelectButtonModule,
        ButtonModule,
        CalendarModule,
        MessagesModule,
        MessageModule,
        ToastModule
    ],
    providers: []
})
export class CustomPrimeNGModule { }