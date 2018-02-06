import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthProvider} from "../../providers/auth/auth";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";

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
    private authProvider: AuthProvider
  ) {
    this.pages = [
      { title: 'Home', component: HomePage }
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
}
