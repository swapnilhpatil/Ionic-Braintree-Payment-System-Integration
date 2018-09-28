import { Component } from '@angular/core';
import { IonicPage, App, LoadingController,ViewController } from 'ionic-angular';
/*import { Storage} from '@ionic/storage';
import { Http,Headers,RequestOptions } from '@angular/http';*/
//import { Keyboard } from '@ionic-native/keyboard';

//import { Braintree, ApplePayOptions,PaymentUIResult, PaymentUIOptions } from '@ionic-native/braintree';
import * as dropin from 'braintree-web-drop-in';
import * as $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

private BRAINTREE_TOKEN;
public paymentData : any;
public payAmount : any;

constructor(

    public viewCtrl: ViewController,
    public app: App,
    private loadingCtrl: LoadingController,
	 // private braintree: Braintree,
	 // private keyboard:Keyboard
    ) {

	  this.payAmount = 10;
	  this.paymentData ="Pay";
    this.BRAINTREE_TOKEN = 'sandbox_vpthqzzr_xwt69yw628qjyz9m';

	}


  navToHomePage(){
    //this.keyboard.close();
	//if you navigated to this page from other page, u can uncommnet below line
    //this.navCtrl.pop();
  }



  focusOut() {
    //let activeElement = <HTMLElement>document.activeElement;
    //activeElement && activeElement.blur && activeElement.blur();
    //this.keyboard.close();
  }

  paydata(){


	  let loading = this.loadingCtrl.create({content:'Processing... please wait'});
				loading.present();
				setTimeout(() => {
				  loading.dismiss();
				},3000);

	  console.log("-----paydata()--------call");
	  $('#confirmData').hide();
	  $('#confirmmsg').hide();
	  $('#confirmdonation').show();



  $("#donate").html("Donate");
  var self = this;
  var form = document.querySelector('#payment-form');
      dropin.create({
        authorization: this.BRAINTREE_TOKEN,
        container: '#dropin-container',
         paypal: {
            flow: 'checkout',
            singleUse: true,
            amount: this.payAmount,
            currency: '$',
          }
      }, function (err, dropinInstance) {
           $('#shareAmount').hide();

		   if (err) {
		     console.log("err 1 : "+err);
		     console.error(err);
		     return;
		   }

          form.addEventListener('submit', function (event) {
             event.preventDefault();

          dropinInstance.requestPaymentMethod(function (err, payload) {
             if (err) {
              console.log("err 2 : "+err);
              return;
             }
         	  console.log("-----paydata() payload--------");
		        console.log("payload 2 : "+JSON.stringify(payload));
			      console.log("payload.nonce : "+payload.nonce);

            if(payload.nonce !==undefined){
               self.paymentDetailsSave(payload.nonce);
            }
            $("#donate").hide();
            $('#confirmdonation').hide();
            $('#Authenticating').show();

          });
        });
      });
     }
  paymentDetailsSave(payloadNonce){
    console.log('payloadNonce :' + payloadNonce);
  }
}
