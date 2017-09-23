import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DashboardComponent } from './bike/dashboard/dashboard.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', pathMatch: 'prefix', component: DashboardComponent,
    children: [
      {path: 'browse', pathMatch: 'full', component: BrowseComponent},
      {path: 'listing', pathMatch: 'full', component: ListingComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
