import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [LandingComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
