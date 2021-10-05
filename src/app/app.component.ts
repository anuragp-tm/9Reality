import { Component } from '@angular/core';

// Below should be uncommented for the Mobile app
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Taksboard', url: '/taskboard', icon: 'mail',
    subPages: [
      { title1: 'Contact1', url: '', name1: 'contact1' },
      { title1: 'Contact2', url: '', name1: 'contact2'  },
      { title1: 'Contact3', url: '', name1: 'contact3'  },
  ]
  },
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Project', url: '/project', icon: 'archive' },
    { title: 'Property', url: '/property', icon: 'heart' },
    { title: 'Setup', url: '/setup', icon: 'heart' },
    { title: 'Authentication', url: '/authentication', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  // constructor(
  //   private platform: Platform,
  //   private splashScreen: SplashScreen,
  //   private statusBar: StatusBar
  // ) {
  //   this.initializeApp();
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
}
