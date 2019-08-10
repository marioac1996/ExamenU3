import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule,Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes:Routes = [
{
	path:'tabs',
	component:TabsPage,
	children:[
	{
		path:'home',
		children:[{
			path:'',
			loadChildren:'../home/home.module#HomePageModule'
		}
		]
	},
	{
		path:'mapa',
		children:[{
			path:'',
			loadChildren:'../mapa/mapa.module#MapaPageModule'
		}
		]
	},
	{
		path:'geolocation',
		children:[{
			path:'',
			loadChildren:'../geolocation/geolocation.module#GeolocationPageModule'
		}
		]
	}
	
	
	]
}
]

@NgModule(
{
	imports:[RouterModule.forChild(routes)],
	exports:[RouterModule]
}
	)
export class TabsPageRoutinModule{}