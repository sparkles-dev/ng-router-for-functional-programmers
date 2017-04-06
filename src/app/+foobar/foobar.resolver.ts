import { InjectionToken } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export const FOOBAR_RESOLVER_ALPHA = new InjectionToken<Resolve<any>>('foobar-resolver.alpha');

export function foobarResolverAlpha() {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any => {

    return Observable.of({ foo: 'bar' }).delay(1300); // <-- we're travelling on a sloooow network ;-)
  }
}

export const FOOBAR_RESOLVER_BETA = new InjectionToken<Resolve<any>>('foobar-resolver.beta');

export function foobarResolverBeta() {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any => {

    return Observable.of({ bar: '123' });
  }

}
