import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // {path:'parent',component:ParentComponent},
  // {path:'**',component:PagenotfoundComponent},
  {path:'feature-1',loadChildren:()=>import('./fraturemodule1/one/one.module').then(m=>m.OneModule)},
  {path:'feature-2',loadChildren:()=>import('./fraturemodule2/two/two.module').then(m=>m.TwoModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
