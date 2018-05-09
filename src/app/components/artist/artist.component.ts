import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit{

	artista:any = {};
	songs:any = {};

	constructor( private _activatedRoute: ActivatedRoute, public spotify:SpotifyService ){}

	ngOnInit(){

		this._activatedRoute.params
			.map( params => params['id'] )
			.subscribe( id => {

				this.spotify.getArtista( id ).subscribe( artista => {

					this.artista = artista;
				} );

				this.spotify.getTopTrack( id ).subscribe( songs => {

					this.songs = songs;
					console.log( this.songs );
				} );
			});
	}
}