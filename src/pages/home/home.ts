import { Component } from '@angular/core';
import { MqttService, MqttMessage } from 'ngx-mqtt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _mqttService: MqttService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this._mqttService.observe('#')
        .subscribe((message: MqttMessage) => {
          console.log(message.payload.toString());
        });
  }
}