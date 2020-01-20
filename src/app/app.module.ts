import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './share/header/header.component';
import { PlayerComponent } from './player/player.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './player/add/add.component';
import { EditComponent } from './player/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlayerComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule //ใช้สำหรับเก็ตค่าของฟอร์ม --form control,Group
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
