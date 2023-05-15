import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GetInTouchComponent } from './pages/get-in-touch/get-in-touch.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ServiceComponent } from './pages/service/service.component';
import { HomeComponent } from './pages/homepage/home.component';
import { CareerComponent } from './pages/career/career.component';
import { UploadResumeComponent } from './pages/upload-resume/upload-resume.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'career', component: CareerComponent},
  {path: 'getintouch', component: GetInTouchComponent},
  {path: 'uploadresume', component:UploadResumeComponent},
  {path: '**', component: PagenotfoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
