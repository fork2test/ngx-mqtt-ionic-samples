import { Component } from '@angular/core';
import { MqttService, MqttMessage } from "ngx-mqtt/src";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private _mqttService: MqttService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');

    this._mqttService.observe('#')
        .subscribe((message: MqttMessage) => {
          console.log(message.payload.toString());
        });
  }

}
