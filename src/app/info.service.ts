import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

infos: string[] = ['robert', 'the', 'boss']; 




  constructor() { }



   


  getInfo(): string {
  	return this.infos.join();
  }
}
