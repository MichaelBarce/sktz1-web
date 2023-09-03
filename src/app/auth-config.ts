import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_signupsignin_v1",
         resetPassword: "B2C_1_password_reset_v1",
         editProfile: "B2C_1_profile_edit_v1"
     },
     authorities: {
         signUpSignIn: {
             //authority: "https://sokrateez.onmicrosoft.com.b2clogin.com/sokrateez.onmicrosoft.com.onmicrosoft.com/B2C_1_signupsignin_v1",
             authority: "https://sokrateez.b2clogin.com/sokrateez.onmicrosoft.com/B2C_1_signupsignin_v1",
         },
         resetPassword: {
            //  authority: "https://sokrateez.onmicrosoft.com.b2clogin.com/sokrateez.onmicrosoft.com.onmicrosoft.com/B2C_1_profile_edit_v1"
             authority: "https://sokrateez.b2clogin.com/sokrateez.onmicrosoft.com/B2C_1_profile_edit_v1"
         },
         editProfile: {
            // authority: "https://sokrateez.onmicrosoft.com.b2clogin.com/sokrateez.onmicrosoft.com.onmicrosoft.com/B2C_1_profile_edit_v1"
            authority: "https://sokrateez.b2clogin.com/sokrateez.onmicrosoft.com/B2C_1_profile_edit_v1"
      }

     },
    //  authorityDomain: "sokrateez.onmicrosoft.com.b2clogin.com"
    authorityDomain: "sokrateez.b2clogin.com"
 };

export const msalConfig: Configuration = {
     auth: {
         clientId: 'be33b5c9-1301-4c05-a4f5-a6cdcc638294',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/',
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE,
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  videosApi: {
    // endpoint: "http://localhost:5000/api/todolist",
    endpoint: "http://localhost:55660/api/Demo",



    scopes: [
      "https://sokrateez.onmicrosoft.com/api/videos.read",
      "https://sokrateez.onmicrosoft.com/api/videos.write"
    ],
  },
}
export const loginRequest = {
  scopes: []
};
