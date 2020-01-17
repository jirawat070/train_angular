import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { AddComponent } from './player/add/add.component';
import { EditComponent } from './player/edit/edit.component';


const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'player',component: PlayerComponent},
  {path:'player/add',component:AddComponent},
  {path:'player/edit/:id',component:EditComponent},
  {path:'**',component:HomeComponent}
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
