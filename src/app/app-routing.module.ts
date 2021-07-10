import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

const routes: Routes = [{path:'symptoms',component:SymptomsComponent},{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
