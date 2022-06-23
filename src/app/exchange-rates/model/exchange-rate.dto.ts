export class ExchangeRate {
    effectiveDate!: Date;
    no!: string;
    rates!: Rates[];
    table!: string;
}

export interface Rates {
    currency: string;
    code: string;
    mid: number;
}