import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * {@link FooGuard} implements a {@link CanActivate} guard in classical object-oriented
 * programming style.
 *
 * Angular's routing framework defines an interface that {@link FooGuard} implements.
 * The implementation class is annotated with `@Injectable()`, in TypeScript jargon the class
 * is actually 'decorated', and hooked into Angular's dependendency injection with a class
 * provider, i.e. `providers: [ FooGuard ]`.
 */
@Injectable()
export class FooGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Observable.of(true);
  }

}
