import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar módulo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar Módulo Formulariios
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { NavLoginsComponent } from './components/nav-logins/nav-logins.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginAdminComponent,
    LoginUsuarioComponent,
    ReproductorComponent,
    AdminComponent,
    MenuComponent,
    RegistroComponent,
    PerfilUsuarioComponent,
<<<<<<< HEAD
=======
    NavLoginsComponent,
    NavLandingComponent
>>>>>>> 6d69e23a24b4a55c1a45f1e04445b13c1f290d0b
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule { }
