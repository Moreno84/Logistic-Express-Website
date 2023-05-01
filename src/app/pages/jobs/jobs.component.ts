import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  jobTitles:any = [
    {
      title: "Customer service",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      title: "Receptionist",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      title: "Sales manager",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    
  ]

downloadPDF: string="./assets/documentsPDF/IvanMoreno.pdf";

  readMe(){
    window.open(this.downloadPDF);
  }

}
