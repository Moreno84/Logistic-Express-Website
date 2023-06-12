import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FormGetInTouchService } from 'src/app/service/form-get-in-touch.service';
import { contact } from 'src/app/service/contact';



@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {
  // Image
    imageMap:string="./assets/images/map.png";
  // Title
    title="Contact";
  // Text
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec metus massa.Suspendisse gravida ultricies velit eget volutpat. Integer vulputate est eu rutrum mattis. Quisque dictum ultricies nulla non consequat. Aliquam a neque sit amet libero congue congue in id enim. Nunc suscipit bibendum nisi. Nullam turpis nisi, porttitor non enim id, ornare auctor risus. Sed sed pretium nisi, vitae bibendum ipsum. Pellentesque a mauris augue.";
  // contacts: contact[];
  
   constructor(private formGetInTouchService: FormGetInTouchService){} 

   ngOnInit(){
    this.formGetInTouchService.getContacts().subscribe((data: contact[])=>{
      // this.contacts = data;

    });
   }

  //Form validation

    registerForm = new FormGroup ({
      name: new FormControl('',[Validators.required,Validators.maxLength(25)]),
      surname: new FormControl('',[Validators.required,Validators.maxLength(25)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      comment: new FormControl('',[Validators.required,Validators.maxLength(100)])

    })

    onSubmit(){
      console.warn(this.registerForm.value);
      //this.formGetInTouchService.getContacts(this.registerForm.value).subscribe();
    }

    get name(){
      return this.registerForm.get('name');
    }

    get surname(){
      return this.registerForm.get('surname');
    }

    get email(){
      return this.registerForm.get('email');
    }

    get comment(){
      return this.registerForm.get('comment');
    }


}
