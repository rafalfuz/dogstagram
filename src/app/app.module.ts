import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import {HttpClientModule} from '@angular/common/http';
import { DogImageComponent } from './dog-image/dog-image.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogImageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
