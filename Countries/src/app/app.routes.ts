import { Routes } from '@angular/router';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { CountryComponent } from './countries/pages/country/country.component';

export const routes: Routes = [

    {
        path: 'countries',
        children: [
            {
                path: 'by-capital',
                component: ByCapitalComponent
            },
            {
                path: 'by-country',
                component: ByCountryComponent
            },
            {
                path: 'by-region',
                component: ByRegionComponent
            },
            {
                path: 'by/:id',
                component: CountryComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'countries'
    }

];
