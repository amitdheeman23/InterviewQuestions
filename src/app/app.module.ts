import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShareDataService } from './share-data.service';
import { ExapmleService } from './exapmle.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HomeComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [ShareDataService,ExapmleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
