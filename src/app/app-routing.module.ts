import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./home-page/home-page-component";
import { RouterModule, Routes } from "@angular/router";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contacts', component: ContactsPageComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
