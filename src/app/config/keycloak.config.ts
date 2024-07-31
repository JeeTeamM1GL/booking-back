import { KeycloakConfig } from 'keycloak-js';
import { environment } from '../../environments/environment';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: `${environment.keycloak.url}` ,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      enableBearerInterceptor : true,
      bearerPrefix : 'Bearer',
      bearerExcludedUrls: ['/assets'],
      initOptions: {
        onLoad: 'login-required',
        redirectUri : "http://localhost:4200",
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}