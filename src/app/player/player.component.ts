import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
player :any;
playerList :any;
  constructor(private service:PlayerService) { }

  ngOnInit() {
    this.player = {
        name: 'Jirawat',
        birth:'08-08-1997',
        id: '1',
        highestScore: 200,
        createDateTime: '12-12-2019'
      }
    
    this.service.loadPlayer().subscribe(data =>{
        console.log(data);
        this.playerList = data
    })


  //   this.playerList =[ 
  //   {
  //     name: 'Jirawat1',
  //     birth:'08-08-1997',
  //     playerId: '1',
  //     highestScore: 999,
  //     datetime: '12-12-2019'

  //   },{
  //     name: 'Jirawat2',
  //     birth:'08-08-1997',
  //     playerId: '2',
  //     highestScore: 55544,
  //     datetime: '12-12-2019'

  //   },{
  //     name: 'Jirawat3',
  //     birth:'08-08-1997',
  //     playerId: '3',
  //     highestScore: 4444,
  //     datetime: '12-12-2019'

  //   },{
  //     name: 'Jirawat4',
  //     birth:'08-08-1997',
  //     playerId: '4',
  //     highestScore: 5555,
  //     datetime: '12-12-2019'

  //   }
  // ]

  }

  setPlayer(player :any){
    // this.player = {
    //   name: player.name,
    //   birth:player.birth,
    //   playerId: player.playerId,
    //   highestScore: player.highestScore,
    //   datetime: player.datetime
    // }
    this.player=player
    console.log('player'+player);
    
  }
}
