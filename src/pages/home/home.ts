import { Component } from '@angular/core';
import { MqttService, MqttMessage } from 'ngx-mqtt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lastMessage = ''

  constructor(private _mqttService: MqttService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this._mqttService.observe('home')
        .subscribe((message: MqttMessage) => {
          this.lastMessage = message.payload.toString();
          console.log(message);
        });
  }

  onPub2Home(){
    this.pub('home', 'home');
  }
  onPub2Contact(){
    this.pub('home', 'contact');
  }
  onPub2About(){
    this.pub('home', 'about');
  }

  private pub(from:string, to:string) {
    this._mqttService.unsafePublish(to, 'messaging ' + to + ' from ' + from + ' at ' + new Date().toLocaleTimeString())
  }
}