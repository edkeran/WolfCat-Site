import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentMainInfoComponent } from './content-main-info/content-main-info.component';
import { CardContentInfoComponent } from './card-content-info/card-content-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ContentMainInfoComponent,
    CardContentInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
