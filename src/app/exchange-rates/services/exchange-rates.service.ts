import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExchangeRatesService {
    constructor(private http: HttpClient) { }

    getEchangeRates() {
        return this.http.get<any>('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
    }

    getEchangeRatesOnGivenDay(date: any) {
        return this.http.get<any>(`http://api.nbp.pl/api/exchangerates/tables/A/${date}/?format=json`);
    }
}