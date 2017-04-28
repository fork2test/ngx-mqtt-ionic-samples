import { Component } from '@angular/core';
import { MqttService, MqttMessage } from "ngx-mqtt";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items : string [] = [];

  constructor(private _mqttService: MqttService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');

    this._mqttService.observe('contact')
        .subscribe((message: MqttMessage) => {
          this.items.push(message.payload.toString());
          console.log(message.payload.toString());
        });
  }

}
