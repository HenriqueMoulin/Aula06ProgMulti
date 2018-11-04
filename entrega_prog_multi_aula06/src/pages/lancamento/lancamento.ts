import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LancamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *  Nome: Henrique Moulin RA: 816117860 
 */

@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentoPage');
  }

}