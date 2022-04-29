import { OMDbSearchWithoutRxJSModule } from './components/omdb-search-wo-rxjs/omdb-search-wo-rxjs.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OMDbSearchModule } from './components/omdb-search/omdb-search.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    OMDbSearchModule,
    OMDbSearchWithoutRxJSModule,
    PdfViewerModule,
    MatCardModule,

  ],
  exports: [
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
