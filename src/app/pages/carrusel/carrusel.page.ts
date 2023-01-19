import { CamaraService } from './../../servicios/camara.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Share } from '@capacitor/share';
import { SwiperModule } from 'swiper/angular';

// importamos Swiper y  modulos necesarios
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// instalamos los modulos
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.page.html',
  styleUrls: ['./carrusel.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarruselPage implements OnInit {

  options={
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 400
   }; 

  constructor(public usarCamara: CamaraService) { }

  ngOnInit() {
  }

  

}
