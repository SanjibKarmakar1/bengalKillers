import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

export const router: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	//{path: 'contact', component: ContactComponent},
	{path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'},
	{path: 'gallery', component: GalleryComponent},
	{path: 'blog', component: BlogComponent},
	{path: '404', component: PageNotFoundComponentComponent},
	{path: '**', redirectTo: '/404'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);