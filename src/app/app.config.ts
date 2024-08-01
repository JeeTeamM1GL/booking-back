import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzConfig } from 'ng-zorro-antd/core/config';
import { KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './config/keycloak.config';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzIcons(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(),
    provideNzConfig({
      theme : {
        primaryColor : '#2ecc71'
      },
    }),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ]
};
