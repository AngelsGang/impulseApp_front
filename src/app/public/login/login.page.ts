import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder,
    private alertCtrl: AlertController) { }

  commentForm:FormGroup;

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      username:[''],
      password:['', Validators.required],
      statut:[false],
   })
  }

  login(form){
    if (form.value.username== 'admin' && form.value.password == 'admin'){
      this.authService.login();
      form.value.statut = true;
    }else{
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerte',
      subHeader: 'Identifiants incorrect',
      message: 'Veuillez saisir correctement vos identifiants.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
