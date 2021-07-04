import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BookDesignComponent} from '../app/book/book-design/book-design.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/layout/header/header.component';
import{FooterComponent} from '../app/layout/footer/footer.component'
import {HomeComponent} from '../app/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BookDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
