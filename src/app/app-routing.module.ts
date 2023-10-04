import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [


  // {path:'feature-1',loadChildren:()=>import('./fraturemodule1/one/one.module').then(m=>m.OneModule)},
  // {path:'feature-2',loadChildren:()=>import('./fraturemodule2/two/two.module').then(m=>m.TwoModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
