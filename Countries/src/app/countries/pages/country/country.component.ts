import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country',
  imports: [CommonModule, RouterModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {

  public country?: Country;
  public lastValue?: string;
  public lastRoute?: string;

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    if (!sessionStorage.getItem('lastSearch')) { return };
    const lastSearch = JSON.parse(sessionStorage.getItem('lastSearch')!)
    this.lastValue = lastSearch[0]
    this.lastRoute = lastSearch[1]

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.countriesService.searchCode( id ) )
      )
      .subscribe( country => {
        if(!country) {
          return this.router.navigateByUrl('')
        }else{
          return this.country = country;
        }
      })
  }

}
