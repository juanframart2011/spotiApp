import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { SinfotoPipe } from '../../pipe/sinfoto.pipe';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
})
export class SearchComponent{
	
	message:any;
	termino:string = '';

	constructor( public spotify: SpotifyService ){}

	buscarArtista(){

		if( this.termino.length == 0 ){

			return;
		}
		this.spotify.getArtistas( this.termino ).subscribe( artistas => {} );
	}
}