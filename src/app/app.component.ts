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
    { title: 'Taksboard', icon: 'mail', open: false,
    subPages: [
      { title: 'Contact1', url: '/taskboard', icon: 'business', name: 'contact1' },
      { title: 'Contact2', url: '', icon: 'archive', name: 'contact2'  },
      { title: 'Contact3', url: '', icon: 'archive', name: 'contact3'  },
  ]
  },
    { title: 'Dashboard', url: '/dashboard', icon: 'home' ,
    open: false,
    subPages:[
      { title: 'Project_bks', url: '/project', icon: 'calendar' },
      { title: 'Property_bks', url: '/property', icon: 'heart' },
    ]},
    { title: 'Project', url: '/project', icon: 'cog' },
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
