import { enableProdMode, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { ErrorInterceptorProvider } from './_helpers/erro-interceptor';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { HomeComponent } from './home/home.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import ptBr from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guard/auth.guard';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ListarAgendamentoComponent } from './agendamento/listar-agendamento/listar-agendamento.component';
import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/br';

enableProdMode();
// Registre o locale
registerLocaleData(localeBR);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AuthCallbackComponent,
    ListarAgendamentoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(AdminRoutes),
    NgxSpinnerModule,
    OAuthModule.forRoot(),
    FullCalendarModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertifyService,
    ErrorInterceptorProvider,
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
