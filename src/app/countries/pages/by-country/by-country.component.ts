import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';

@Component({
  selector: 'app-by-country',
  imports: [SearchBoxComponent, CommonModule, CountriesTableComponent],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.scss'
})
export class ByCountryComponent {

  public countries: Country[] = [];
  
    constructor(
      private countriesService: CountriesService
    ) {}
  
    searchCountry(term: string): void {
      this.countriesService.searchCountry(term)
        .subscribe(countries => this.countries = countries);
    }

}
