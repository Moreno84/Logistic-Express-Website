import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { contact } from 'src/app/services/contact';
// import { Contact } from 'src/app/services/contact';
import { FormGetInTouchService } from 'src/app/services/form-get-in-touch.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
  providers: [FormGetInTouchService]
})
export class GetInTouchComponent implements OnInit {
  // Image
    imageMap:string="./assets/images/map.png";
  // Title
    title="Contact";
  // Text
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec metus massa.Suspendisse gravida ultricies velit eget volutpat. Integer vulputate est eu rutrum mattis. Quisque dictum ultricies nulla non consequat. Aliquam a neque sit amet libero congue congue in id enim. Nunc suscipit bibendum nisi. Nullam turpis nisi, porttitor non enim id, ornare auctor risus. Sed sed pretium nisi, vitae bibendum ipsum. Pellentesque a mauris augue.";

  //contact
  contacts:any;

   constructor(private formGetInTouchService: FormGetInTouchService){
    // this.formGetInTouchService.saveData(this.contacts).subscribe((data)=>{
    //   this.contacts = data;
    // })
   } 

   ngOnInit(): void{


   }

  //Form validation

  registerForm= new FormGroup ({
    Name: new FormControl('',[Validators.required,Validators.maxLength(25)]),
    Surname: new FormControl('',[Validators.required,Validators.maxLength(25)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Comment: new FormControl('',[Validators.required,Validators.maxLength(100)])

  })

  getContactFormData(data:any){
      // console.warn(this.registerForm.value);
      // console.warn(data);
      this.formGetInTouchService.saveData(data).subscribe((result)=>{
      console.warn(result);
      }
  )}
  }
