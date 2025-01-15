import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-language',
  imports: [SearchBoxComponent, CommonModule, CountriesTableComponent],
  templateUrl: './by-language.component.html',
  styleUrl: './by-language.component.scss'
})
export class ByLanguageComponent {

  public lastValue: string = '';

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('lastSearch')) { return };
    const lastSearch = JSON.parse(sessionStorage.getItem('lastSearch')!)
    const route = lastSearch[1]
    if (route === this.router.url){
      this.lastValue = lastSearch[0]
    }
  }

  searchCountry(term: string): void {
    this.countriesService.searchLanguage(term)
      .subscribe(countries => this.countries = countries);
  }

}
