import { Injectable } from '@angular/core';
import {TOOLS} from './mock-tools';
import {Tools} from './tools'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

	heroesUrl = ''
  tools: Tools[];
  // Create simple observable that emits three values
  myObservable = of(1, 2, 3);
 
// Create observer object
myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

  constructor(private http: HttpClient) { 
  	//this.tools = this.getTools();
  }


  ngOnInit() {
  }

  getTools():Tools[]{
  	this.myObservable.subscribe(this.myObserver);
  	//console.log(JSON.stringify(TOOLS));
  	return TOOLS;
  }

  
}