import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {

  //Form validation

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    lastname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required]),
    uploadResume: new FormControl('',[Validators.required,Validators.maxLength(50)])

  })

  onSubmit(){
    console.warn(this.form.value)
  }

  get name(){
    return this.form.get('name');
  }

  get lastname(){
    return this.form.get('lastname');
  }

  get email(){
    return this.form.get('email');
  }

  get phone(){
    return this.form.get('phone');
  }

  get uploadResume(){
    return this.form.get('uploadResume');
  }

  file:any;
  getResume(event:any){
    this.file = event.target.files[0];

    console.log('file',this.file);
  }



}
