import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument, 
  DocumentChangeAction
} from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class HeroDBService {

  heroes: Observable<Hero[]>;
  docChangeAction: Observable<DocumentChangeAction<Hero>[]>;
	itemsCollection: AngularFirestoreCollection<Hero>;
  hero: Observable<Hero>;
  document: AngularFirestoreDocument<Hero>;

  constructor(public afs:AngularFirestore, private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    this.itemsCollection = this.afs.collection<Hero>('heroes');
    this.heroes = this.itemsCollection.valueChanges();
    return this.heroes;
  }

  addHero(hero: Hero):Observable<Hero> {
    let customId :string = Math.random().toString();
    this.itemsCollection = this.afs.collection<Hero>('heroes');
    hero.id = customId;
    this.itemsCollection.doc(customId).set(hero);
    return of(hero);
  }

  deleteHero (hero: Hero): Observable<Hero>{
    this.itemsCollection = this.afs.collection<Hero>('heroes');
    this.itemsCollection.doc(hero.id).delete();
    return of(hero);
  }

  getHero(customId: string): Observable<Hero>{
    this.itemsCollection = this.afs.collection<Hero>('heroes');
    this.document = this.itemsCollection.doc(customId);
    return this.document.valueChanges();
  }


  updateHero (hero: Hero): Observable<any> {
    this.itemsCollection = this.afs.collection<Hero>('heroes');
    this.itemsCollection.doc(hero.id).update(hero);
    return of(hero);
  }

    /** GET hero by id. Will 404 if id not found */
  /*getHero(id: string): Observable<Hero> {
  	this.itemsCollection = this.afs.collection<Hero>('heroes');
  	this.heroes = this.itemsCollection.valueChanges();
    return heroes;
  }*/


   //////// Save methods //////////


  /** POST: add a new hero to the server 
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
