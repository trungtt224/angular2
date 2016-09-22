import {Injectable} from '@angular/core';
import {Hero} from './hero';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class HeroService
{
	private heroesUrl = 'app/heroes';
	private spiralUrl = 'http://localhost:10001/v1/apps'
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http){};

	getHeroes() : Promise<Hero[]> {
		var headers = new Headers();
		headers.append("Content-Type", "application/json;charset=UTF-8");
		headers.append("Authorization", "Basic 0dc8ec236207fea5316950c970aff705a72a8df2a58908717a8a36f3e902d0bd0")

		this.http.get(this.spiralUrl, {headers: headers}).subscribe(
			response => console.log(response)
		);
		 return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
	}

	getHero(id: number): Promise<Hero> {
  		return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  return this.http
	    .put(url, JSON.stringify(hero), {headers: this.headers})
	    .toPromise()
	    .then(() => hero)
	    .catch(this.handleError);
	}
} 