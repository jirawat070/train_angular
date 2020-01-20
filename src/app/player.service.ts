import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient){}
 
  loadPlayer(){
    return this.http.get('http://localhost:8080/api/player/list');
  }
  addPlayer(player:any){
    // let headers = new Headers({ 'Content-Type': 'application/json' });
   
    console.log("add data" + JSON.stringify(player) );
    return this.http.post('http://localhost:8080/api/player/create',player , {responseType: 'text'})
  
  }

  getPlayer(id:number){
    console.log("id" + id);
    
    return this.http.get(`http://localhost:8080/api/player/`+id);

  }

  deletePlayer(id:number){
    console.log("id" + id);
    
    return this.http.delete(`http://localhost:8080/api/player/`+id , {responseType: 'text'});
  }
}
