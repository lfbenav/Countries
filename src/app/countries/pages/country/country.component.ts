import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country',
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {

  public country?: Country;

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

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
