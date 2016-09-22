import { Component, OnInit } from '@angular/core';
import {Http, Headers}   from '@angular/http';

export class Hero {
  id: number;
  name: string;
}

export class Weather {
  coord : string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
      <button (click)="getWeather()">New minor version</button>
    </div>
    `
})
export class AppComponent implements OnInit {
  
  constructor(public http: Http) {

  }

  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  ngOnInit(): void {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44fc2c94262ae0e48939e947a1032cea')
    .subscribe(
      response => console.log(response.json().coord),
      err => console.log(err),
      () => console.log('Random Quote Complete')
    );
  }

  getWeather() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44fc2c94262ae0e48939e947a1032cea')
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Random Quote Complete')
    );
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/