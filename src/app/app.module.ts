import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FileSelectDirective} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    UserFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
