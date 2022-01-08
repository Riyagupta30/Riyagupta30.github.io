import { NgModule } from '@angular/core';
import { Routes , RouterModule  } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './staticpages/about-us/about-us.component';


const routes: Routes = [
  
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'about-us',component:AboutUsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
