import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-region',
  imports: [SearchBoxComponent, CommonModule, CountriesTableComponent],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.scss'
})
export class ByRegionComponent {

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
    this.countriesService.searchRegion(term)
      .subscribe(countries => this.countries = countries);
  }

}
