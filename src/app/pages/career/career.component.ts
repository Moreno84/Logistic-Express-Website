import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {


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


}
