import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-connexionparents',
  templateUrl: 'connexionparents.html'
})
export class ConnexionparentsPage {

  constructor(public navCtrl: NavController) {

  }
  
  login (){
    this.navCtrl.push(HomePage);
  }
}




  
  