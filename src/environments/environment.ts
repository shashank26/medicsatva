// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB8ATbLbTyN1RdK7aQx6tw5QrU3_kAXLO8",
    authDomain: "my-awesome-project-52c75.firebaseapp.com",
    databaseURL: "https://my-awesome-project-52c75.firebaseio.com",
    projectId: "my-awesome-project-52c75",
    storageBucket: "my-awesome-project-52c75.appspot.com",
    messagingSenderId: "812475551408"
  },
  scienceDailyFeed: "https://www.sciencedaily.com/rss/top/health.xml",
  mailJet:{
    clientId : "f9778d2c43ca8dfc460513f0bbb6cf5e",
    clientSecret : "ee80f0cb61463dc9e513f13e3e6ef469"
  },
  googleMailApi : {
    clientId : "812475551408-vvl82rrkdvj5cm5vr7fqsf821kp0na98.apps.googleusercontent.com",
    clientSecret : "DCj5sYzu47yVBFeJEQ0nNhBI"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
