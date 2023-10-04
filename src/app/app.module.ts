import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TwoComponent } from './fraturemodule2/two/two.component';
import { Data3Service } from './data3.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HomeComponent,
    PagenotfoundComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [Data3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
