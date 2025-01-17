import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    FaIconLibrary,
    AuthenticationService,
    HttpService,
  ],
  bootstrap: [AppComponent],
  exports: [NgxMaskModule],
})

export class AppModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, far);
  }
}
