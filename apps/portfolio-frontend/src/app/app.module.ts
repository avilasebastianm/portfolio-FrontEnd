import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { MyservicesComponent } from './component/myservices/myservices.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { HobbysComponent } from './component/hobbys/hobbys.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    MyservicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    HabilidadesComponent,
    ContactoComponent,
    HobbysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
