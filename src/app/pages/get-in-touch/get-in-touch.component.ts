import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

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
    
  //Form validation

    registerForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      surname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      comment: new FormControl('',[Validators.required,Validators.maxLength(50)])

    })

    onSubmit(){
      console.warn(this.registerForm.value)
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
