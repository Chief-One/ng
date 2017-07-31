import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationComponent } from './components/application/application.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourceService } from './services/resource.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    BrowserModule
  ],
  providers: [ResourceService],
  declarations: [ApplicationComponent, NavigationComponent, FooterComponent, HomeComponent, AboutComponent, NotFoundComponent],
  bootstrap: [ApplicationComponent]
})

export class AppModule { }
