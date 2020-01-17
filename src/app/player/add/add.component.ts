import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { PlayerService } from 'src/app/player.service';
import { Router } from '@angular/router';
declare var moment: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  profileForm = new FormGroup(
    {
      name : new FormControl(''),
      birth: new FormControl(''),
      highestScore : new FormControl('')
    }
  );
  constructor(private playerService:PlayerService, private router: Router) { }
player : any

  ngOnInit() {
   
  }
 
  addPlayer(){
    this.player = {
      "name" : "pao",
      "birth" : "08/08/1997",
      "highestScore" : 2
    }

    console.log(this.profileForm.value);
    
    // this.playerService.addPlayer(this.player).subscribe(res => {
    //   console.log(res)
    // });
    let pla = {}
    pla = this.profileForm.value  
    pla['birth'] = moment(this.profileForm.value.birth,"YYYY-MM-DD").format('DD/MM/YYYY')
      console.log(moment(this.profileForm.value.birth,"YYYY-MM-DD").format('DD/MM/YYYY'));
    

    this.playerService.addPlayer(pla)
    .subscribe(res => {
      if(confirm(res)){
        this.router.navigateByUrl('player');
      }
      // alert(res)
    });
    
  }

}
