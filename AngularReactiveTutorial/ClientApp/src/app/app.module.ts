import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableControlComponent } from './observable-control/observable-control.component';
import { ObservableSingleComponent } from './observable-single/observable-single.component';
import { AudioPlayer } from './player/audio-player.service';
@NgModule({
    declarations: [AppComponent, HomeComponent, ObservableComponent, ObservableControlComponent, ObservableSingleComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' }
        ])
    ],
    providers: [AudioPlayer],
    bootstrap: [AppComponent]
})
export class AppModule { }
