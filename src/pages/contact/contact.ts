import { Component } from '@angular/core';
import { MqttService, MqttMessage } from "ngx-mqtt";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private _mqttService: MqttService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');

    this._mqttService.observe('#')
        .subscribe((message: MqttMessage) => {
          console.log(message.payload.toString());
        });
  }

}
