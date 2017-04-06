import { InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const BAR_GUARD_TOKEN = new InjectionToken<CanActivate>('bar.guard');

/**
 * An implementation of a {@link CanActivate} guard in functional programming style.
 *
 * {@link barGuard} is hooked into Angular framework as a factory provider function.
 * It returns a lambda expression (TypeScript arrow function) whose call signature is equivalent
 * to the function defined by {@link CanActivate#canActivate()}.
 *
 * The guard implementation must yet be hooked into Angular's dependency injection.
 * For that purpose, a factory provider is registered with
 * `{ provide: BAR_GUARD_TOKEN, useFactory: barGuard }`.
 *
 * In the route definition, the guard is referenced by the {@link BAR_GUARD_TOKEN}, i.e.
 * `canActivate: [ BAR_GUARD_TOKEN ]`.
 * When activating the '/bar' route, Angular resolves the token, executes the factory function,
 * and calls the lambda expression returned by the factory.
 * The return value of the lambda expression tells the router to either allow (returning `true`)
 * or deny (returning `false`) navigation.
 * If allowed, the component shows up telling you that "bar works!".
 */
export function barGuard() {

  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {

    return Observable.of(true);
  }
}
