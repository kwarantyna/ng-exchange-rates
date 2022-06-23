import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ExchangeRate, Rates } from '../../model/exchange-rate.dto';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-exchange-rates-list',
    templateUrl: './exchange-rates-list.component.html',
    styleUrls: ['./exchange-rates-list.component.scss'],
    providers: [MessageService]
})
export class ExchangeRatesListComponent implements OnInit {
    exchangeRates!: Rates[];
    loading: boolean = true;
    value!: Date;

    datePickerFormGroup!: FormGroup;

    constructor(
        private exchangeRatesService: ExchangeRatesService,
        private datePipe: DatePipe,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.getExchangeRates();
    }

    getExchangeRates(): void {
        this.exchangeRatesService.getEchangeRates().subscribe({
            next: (result: ExchangeRate[]) => {
                result.forEach((exchangeRate: ExchangeRate) => {
                    this.exchangeRates = exchangeRate.rates;
                })
            },
            error: (error: HttpErrorResponse) => {
                this.messageService.add({ severity: 'error', summary: error.statusText });
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
            }
        });
    }

    applyingFilter() {
        if (this.value instanceof Date) {
            this.loading = true;
            let date = this.datePipe.transform(this.value, 'yyyy-MM-dd');
            this.exchangeRatesService.getEchangeRatesOnGivenDay(date).subscribe({
                next: (result: ExchangeRate[]) => {
                    result.forEach((exchangeRate: ExchangeRate) => {
                        this.exchangeRates = exchangeRate.rates;
                    });
                },
                error: (error: HttpErrorResponse) => {
                    this.messageService.add({ severity: 'error', summary: error.statusText });
                    this.loading = false;
                },
                complete: () => {
                    this.messageService.add({ severity: 'success', summary: 'Znaleziono wyniki dla podanej daty: ' + date });
                    this.loading = false;
                }
            })
        }
    }

    clear(table: Table, calendar: Calendar) {
        table.clear();
        calendar.value = null;
        calendar.updateInputfield();
        this.getExchangeRates();
    }

}