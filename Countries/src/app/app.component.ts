import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from './countries/services/countries.service';
import { SideBarComponent } from "./shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Countries';

  constructor(
    private countriesService: CountriesService
  ) {}

  // ngOnInit(): void {
  //   this.countryService.searchCountry("Co")
  //     .subscribe( countries => {
  //       console.log(countries)
  //     })
  // }

}
