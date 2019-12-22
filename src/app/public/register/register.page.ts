import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  commentForm:FormGroup;

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      firstName:[''],
      prenom:[''],
      email:['',[Validators.required,Validators.email]],
      adresse:[''],
      ville:[''],
      codePostal:['',[Validators.required, Validators.maxLength(5)]]
   })
  }

  valider(form){
    console.log('enregistrer')
    console.log(form.value)
  }
  
}
