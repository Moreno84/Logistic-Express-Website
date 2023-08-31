import { JobsDataService } from 'src/app/services/jobs-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from 'src/app/services/job';



@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
 
jobs$: Observable<Job[]>;

constructor(private router: Router, private data: JobsDataService){
  this.jobs$ = this.data.getJobs();
  this.jobs$.subscribe();
}



titleCS:string= "Customer service";
descriptionCS:string="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";
titleRe:string= "Receptionist";
descriptionRe:string= "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";
titleSM:string=  "Sales manager";
descriptionSM:string=  "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";


CustomerServicePDF: string="./assets/documentsPDF/CustomerService.pdf";
ReceptionstPDF: string="./assets/documentsPDF/Receptionist.pdf";
SalesManagerPDF: string="./assets/documentsPDF/SalesManager.pdf";

  readCustomerService(){
    window.open(this.CustomerServicePDF);
  }

  readReceptionst(){
    window.open(this.ReceptionstPDF);
  }

  readSalesManager(){
    window.open(this.SalesManagerPDF);
  }

  uploadResume(){
    this.router.navigate(['/uploadresume']);
    // console.log("Resume was uploaded!")
  }

  ngOnInit(){}
}
