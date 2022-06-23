import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
    selector: 'app-exchange-rates',
    templateUrl: './exchange-rates.component.html',
    styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent {
    themes: Theme[];
    selectedTheme!: Theme;

    constructor(
        private themeService: ThemeService
    ) {
        this.themes = [
            { name: 'Ciemny', themeName: 'dark-theme' },
            { name: 'Jasny', themeName: 'light-theme' }
        ];
    }

    switchTheme(): void {
        this.themeService.switchTheme(this.selectedTheme.themeName);
    }
}
interface Theme {
    name: string;
    themeName: string;
}