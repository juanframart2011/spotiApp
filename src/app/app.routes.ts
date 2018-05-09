import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
	{ path: 'artist/:id', component: ArtistComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true } );