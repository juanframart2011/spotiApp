import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { SpotifyService } from './service/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/helper/navbar/navbar.component';
import { SliderComponent } from './components/helper/slider/slider.component';
import { SinfotoPipe } from './pipe/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipe/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SliderComponent,
    SinfotoPipe,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    //const CLIENT_ID = "efb03b98514d478c8494cc2d9f39d6a7";
    //const CLIENT_SECRET = "fb13b3c04b7c40abb5127cc4a5cc4c08";
}