import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BelowNavbarComponent } from './pages/homepage/below-navbar/below-navbar.component';
import { BelowBelowNavbarComponent } from './pages/homepage/below-below-navbar/below-below-navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { GetInTouchComponent } from './pages/get-in-touch/get-in-touch.component';
import { ContactComponent } from './pages/homepage/contact/contact.component';
import { BbelowNavbarComponent } from './pages/homepage/bbelow-navbar/bbelow-navbar.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/homepage/home.component';
import { AirserviceComponent } from './pages/homepage/airservice/airservice.component';
import { RoadserviceComponent } from './pages/homepage/roadservice/roadservice.component';
import { MaritimeserviceComponent } from './pages/homepage/maritimeservice/maritimeservice.component';
import { ServiceComponent } from './pages/service/service.component';
import { RailwayserviceComponent } from './pages/homepage/railwayservice/railwayservice.component';
import { JobComponent } from './pages/homepage/job/job.component';
import { CareerComponent } from './pages/career/career.component';
import { UploadResumeComponent } from './pages/upload-resume/upload-resume.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BelowNavbarComponent,
    BelowBelowNavbarComponent,
    AboutComponent,
    GetInTouchComponent,
    ContactComponent,
    BbelowNavbarComponent,
    PagenotfoundComponent,
    HomeComponent,
    AirserviceComponent,
    RoadserviceComponent,
    MaritimeserviceComponent,
    ServiceComponent,
    RailwayserviceComponent,
    JobComponent,
    CareerComponent,
    UploadResumeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
