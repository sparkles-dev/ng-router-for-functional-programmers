import { InjectionToken } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { RemoteDataService } from '../shared/remote-data.service';

export const FOOBAR_RESOLVER_ALPHA = new InjectionToken<Resolve<any>>('foobar-resolver.alpha');

/**
 * In the same way {@link CanActivate} guards can be implemented in functional programming style,
 * it's also possible to implement {@link Resolve}.
 *
 * Again, write a factory that returns a lambda expression whose call signature is equivalent to
 * {@link Resolve#resolve()}.
 * It needs to registered with dependency injection and referenced in route definition by its
 * corresponding token {@link FOOBAR_RESOLVER_ALPHA}.
 */
export function foobarResolverAlpha() {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any => {

    return Observable.of({ foo: 'bar' }).delay(700); // <-- we're travelling on a sloooow network ;-)
  }
}

export const FOOBAR_RESOLVER_BETA = new InjectionToken<Resolve<any>>('foobar-resolver.beta');

/**
 * In object-oriented style, it's possible to inject services into {@link CanActivate} and
 * {@link Resolve} implementations, since both are "annotated" with `@Injectable()` decorator.
 *
 * In functional programming style, we can do the same thing by writing the dependency as an
 * argument of the factory function.
 * To make it work, we need to add the dependency to the factory provider:
 * `{ provide: FOOBAR_RESOLVER_BETA, useFactory: foobarResolverBeta, deps: [ RemoteDataService ]}`.
 *
 * An instance of {@link RemoteDataService} is then injected to the factory function and the
 * resolve lambda expression returns data by delegating to the service.
 */
export function foobarResolverBeta(remoteData: RemoteDataService) {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any => {

    return remoteData.fetchAllTheThings();
  }

}
