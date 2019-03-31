import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableControlComponent } from './observable-control/observable-control.component';
import { ObservableSingleComponent } from './observable-single/observable-single.component';
import { HomeComponent } from './home/home.component';
import { AudioPlayer } from './player/audio-player.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ObservableComponent,
        ObservableControlComponent,
        ObservableSingleComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AudioPlayer],
  bootstrap: [AppComponent]
})
export class AppModule { }
