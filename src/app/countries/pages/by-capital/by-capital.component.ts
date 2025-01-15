import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CommonModule } from '@angular/common';
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";

@Component({
  selector: 'app-by-capital',
  imports: [SearchBoxComponent, CommonModule, CountriesTableComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.scss'
})
export class ByCapitalComponent {

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  searchCountry(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(countries => this.countries = countries);
  }

}
