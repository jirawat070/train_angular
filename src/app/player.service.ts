import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient){}
 
  loadPlayer(){
    return this.http.get('http://localhost:8080/api/player/list');
  }
}
