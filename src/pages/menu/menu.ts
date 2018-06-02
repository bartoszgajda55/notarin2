import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthProvider} from "../../providers/auth/auth";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";
import {SettingsPage} from "../settings/settings";
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav)
  private nav: Nav;
  private rootPage: any = HomePage;
  private pages: Array<{title: string, component: any}>;
  private userSubscription: Subscription;
  private user: User;

  constructor(
    private authProvider: AuthProvider,
    private navCtrl: NavController
  ) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  ionViewDidEnter(): void {
    this.userSubscription = this.authProvider.getCurrentUserState()
      .subscribe(value => {
        this.user = value;
      })
  }

  ionViewDidLeave(): void {
    this.userSubscription.unsubscribe();
  }

  openPage(page): void {
    this.nav.setRoot(page.component);
  }

  onLogOut(): void {
    this.authProvider.logoutUser()
      .then(value => {
        this.navCtrl.setRoot(LoginPage);
      })
      .catch(reason => {

      })
  }
}
