import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContUsComponent } from './contus/contus.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { TrackAppComponent } from './trackapp/trackapp.component'; // Import the TrackAppComponent

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContUsComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'trackapp', component: TrackAppComponent } // Add the route for TrackAppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
