import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; //จัดการ พาราม
import { PlayerService } from 'src/app/player.service';
import { FormGroup, FormControl } from '@angular/forms';

declare var moment: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profileForm = new FormGroup(
    {
      id: new FormControl(''),
      name : new FormControl(''),
      birth: new FormControl(''),
      highestScore : new FormControl('')
    }
  );
  constructor(private router: ActivatedRoute,private playerService: PlayerService,private router2: Router) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      console.log(params);
      this.playerService.getPlayer( Number(params.get('id'))).subscribe(res => {
        console.log(res);
        this.profileForm.setValue({
          id: res['id'],
          name: res['name'],
          birth : res['birth'],
          highestScore : res['highestScore']
        });

        
      }

      )
    })
  }
  
  editPlayer(){
    let pla = {}
  pla = this.profileForm.value  
  pla['birth'] = moment(this.profileForm.value.birth,"YYYY-MM-DD").format('DD/MM/YYYY')
    console.log(moment(this.profileForm.value.birth,"YYYY-MM-DD").format('DD/MM/YYYY'));
    if(confirm("Are you want to update this player profile ?")){
    this.playerService.addPlayer(pla).subscribe(res => {
  
    
        this.router2.navigateByUrl('player');
     
    })
  }
  }

}
