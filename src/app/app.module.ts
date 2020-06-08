import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { AppRoutingModule } from './app-routing';
import { SingleDigitOnlyDirective } from './pages/home/number.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, GameComponent, SingleDigitOnlyDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
