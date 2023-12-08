import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { contact } from 'src/app/services/contact';
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
    this.formGetInTouchService.saveData(this.contacts).subscribe((data)=>{
      this.contacts = data;
    })
   } 

   ngOnInit(): void{


   }

  //Form validation

  form= new FormGroup ({
    name: new FormControl('',[Validators.required,Validators.maxLength(25)]),
    surname: new FormControl('',[Validators.required,Validators.maxLength(25)]),
    email: new FormControl('',[Validators.required,this.customeEmailValidator]),
    comment: new FormControl('',[Validators.required,Validators.maxLength(100)])

  })


  get name (){
    return this.form.get('name');
  }

  get surname(){
    return this.form.get('surname');
  }

  get email(){
    return this.form.get('email');
  }

  get comment(){
    return this.form.get('comment');
  }

  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Please, Filling in your email address!';
    else if(control.errors?.emailError && control.touched)
      return 'Please enter valid email address!';
    else return '';
}

customeEmailValidator(control:AbstractControl){
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched) 
      return {
        emailError:true
      }
    else return null; 
  }

  getContactFormData(data:any){
      // console.warn(this.registerForm.value);
      console.warn(data);
      this.formGetInTouchService.saveData(data).subscribe((result)=>{
      console.warn(result);
      }
  )}
  }
