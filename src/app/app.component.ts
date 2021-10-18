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
    {
      title: 'Taskboard',
      icon: 'mail',
      open: false,
      subPages: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: 'business',
          name: 'contact1',
        },
        {
          title: 'Enquiry of Purchase',
          url: 'purchase-enquiry',
          icon: 'archive',
          name: 'contact2',
        },
        {
          title: 'Enquiry of Lease',
          url: 'lease-enquiry',
          icon: 'archive',
          name: 'contact3',
        },
      ],
    },
    {
      title: 'Project',
      url: '/project',
      icon: 'home',
      open: false,
      subPages: [
        { title: 'Project List', url: '/project', icon: 'calendar' },
        { title: 'Clients', url: '/property', icon: 'heart' },
      ],
    },
    {
      title: 'Property',
      url: '/property',
      icon: 'cog',
      open: false,
      subPages: [
        { title: 'Property List', url: '/property', icon: 'calendar' },
        { title: 'Clients', url: '/property', icon: 'heart' },
      ],
    },
    {
      title: 'Setup',
      url: '/setup',
      icon: 'heart',
      open: false,
      subPages: [
        { title: 'Employee', url: '/property', icon: 'calendar' },
        { title: 'Lead Source', url: '/lead-source', icon: 'heart' },
        { title: 'Locations', url: '/locations', icon: 'heart' },
        { title: 'Property Type', url: '/property-type', icon: 'heart' },
        { title: 'Budget', url: '/budget', icon: 'heart' },
      ],
    },
    {
      title: 'Authentication',
      url: '/authentication',
      icon: 'paper-plane',
      open: false,
      subPages: [
        { title: 'Users List', url: '/property', icon: 'calendar' },
        { title: 'Access', url: '/property', icon: 'heart' },
        { title: 'Forgot Password', url: '/property', icon: 'heart' },
      ],
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  handleMenuCloseEvent(eventIndex) {
    this.appPages.forEach((item, index) => {
      if(eventIndex === index) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
    });
  }

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
