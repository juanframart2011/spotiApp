import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	artista:any[] = [];
	artistas:any[] = [];
	token:string = "BQBJdWg547d31QXR7m_dXf7k6PXPj6MEFXa8wpTL7n0wrvabtbXlobM8Qbn3PBN9jtcchGT--_U7zGnTRZw";
	topTrack:any[] = [];
	urlSpotify = "https://api.spotify.com/v1/";
	
	constructor( public http:HttpClient ){}

	private getHeaders():HttpHeaders{

		let headers = new HttpHeaders({
			'authorization' : 'Bearer ' + this.token
		});

		return headers;
	}

	getArtista( id:string ){

		let url = `${ this.urlSpotify }artists/${ id }`;
		let headers = this.getHeaders();

		return this.http.get( url, { headers } )
				.map( ( resp:any ) => {

					this.artista = resp;
					return this.artista;
				});
	}

	getArtistas( artista:string ){

		let url = `${ this.urlSpotify }search?query=${ artista }&type=artist&limit=20`;
		let headers = this.getHeaders();

		return this.http.get( url, { headers } )
				.map( ( resp:any ) => {
					this.artistas = resp.artists.items;
					return this.artistas;
				});
	}

	getTopTrack( id:string ){

		let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
		let headers = this.getHeaders();

		return this.http.get( url, { headers } )
				.map( ( resp:any ) => {
					this.topTrack = resp.tracks;
					return this.topTrack;
				});
	}
}