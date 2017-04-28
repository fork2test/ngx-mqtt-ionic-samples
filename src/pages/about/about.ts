import { Component } from '@angular/core';
import { MqttService, MqttMessage } from "ngx-mqtt";
import { NavController, Tabs } from "ionic-angular";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  observableMessage: Observable<MqttMessage>;
  private tabs: Tabs;
  topic = 'other';

  constructor(private _mqttService: MqttService, private navCtrl: NavController) {
    this.tabs = navCtrl.parent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');

    this._mqttService.observe('about')
      .subscribe((message: MqttMessage) => {
          let msg = message.payload.toString();
          console.log(msg);
          if(msg == 'home') {
            console.log('changing tab to home');
            this.tabs.select(0);
          }
          if(msg == 'contact') {
            console.log('changing tab to contact');
            this.tabs.select(2);
          }
    });
    this.observableMessage = this._mqttService.observe(this.topic);
        
  }

  onTopicChange(newtopic: string) {
    console.log('onTopicChange to ' + newtopic)
    this.observableMessage = this._mqttService.observe(newtopic);
  }

}
