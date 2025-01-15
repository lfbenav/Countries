import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss'
})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = [];

}
