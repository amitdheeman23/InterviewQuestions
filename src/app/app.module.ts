import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './employee';// Class @ngModule base


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
