import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

@Component({
	template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

	private rootPage:any;

	constructor(private platform:Platform) {
		this.rootPage = TabsPage;

		platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}
}

ionicBootstrap(MyApp);
