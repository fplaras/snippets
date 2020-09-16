import * as Msal from 'msal'
import config from '../config'

export default class AuthService {
  constructor() {
    this.applicationConfig = {
      auth: {
        clientId: config.clientId,
        redirectUri: config.redirectUri,
        //authority: config.authority
    }      
    }
    this.app = new Msal.UserAgentApplication(this.applicationConfig)
  }

  login() {
    return this.app.loginPopup({
      scopes:['user.read'],
      state: "page_url"
    }).then(
      idToken => {
        console.log("JWT token " + idToken)
      },
      error => {
        console.log("Login error " + error)
      }
    );
  }

  logout() {
    this.app._user = null
    this.app.logout()
  }

  getUser() {
    console.log(this.app);
    return this.app.getUser()
  }
}