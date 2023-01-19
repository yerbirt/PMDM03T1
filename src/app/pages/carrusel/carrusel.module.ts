import { MisComponentesModule } from './../../components/mis-componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarruselPageRoutingModule } from './carrusel-routing.module';
import { CarruselPage } from './carrusel.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarruselPageRoutingModule,
    MisComponentesModule,
    SwiperModule
  ],
  declarations: [CarruselPage]
})
export class CarruselPageModule {}
