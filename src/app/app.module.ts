import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BookDesignComponent} from '../app/book/book-design/book-design.component';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/layout/header/header.component';
import{FooterComponent} from '../app/layout/footer/footer.component'
import {HomeComponent} from '../app/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BackdropComponent } from './backdrop/backdrop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminBoardComponent } from './boards/admin-board/admin-board.component';
import { UsersBoardComponent } from './boards/users-board/users-board.component';
import { BooksBoardComponent } from './boards/books-board/books-board.component';
import { RollsBoardComponent } from './boards/rolls-board/rolls-board.component';
import { CartBoardComponent } from './boards/cart-board/cart-board.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  HomeComponent,
    FooterComponent,
    BookDesignComponent,
    BackdropComponent,
    DashboardComponent,
    AdminBoardComponent,
    UsersBoardComponent,
    BooksBoardComponent,
    RollsBoardComponent,
    CartBoardComponent,
   // UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
   // EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
