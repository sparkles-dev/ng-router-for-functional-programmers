# Functional programming with the Angular router

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

#### Getting Started

Run `yarn install` to set-up a local development environment.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


---


## Functional programming with the Angular router

How to implement `CanActivate` and `Resolve` with lambda expressions.


#### A glance at the classic object-oriented style

The class `FooGuard` implements a `CanActivate` guard in classical object-oriented programming style.

Angular's routing framework defines an interface that `FooGuard` implements.
The implementation class is annotated with `@Injectable()` -- in TypeScript jargon, the class
is actually 'decorated' but it works pretty much the same way as annotations in other oop languages.
Finally, the class is hooked into Angular's dependendency injection and routing framework by its
class token, e.g. with `canActivate: [ FooGuard ]` (in JavaScript land, `FooGuard` is a reference to the constructor function).

```ts
@Injectable()
export class FooGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Observable.of(true);
  }

}
```


#### An implementation of `CanActivate` in functional programming style.

Now, let's implement the same with a functional approach:

```ts
export const BAR_GUARD_TOKEN = new InjectionToken<CanActivate>('bar.guard');

export function barGuard() {

  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean> | Promise<boolean> | boolean => {

    return Observable.of(true);
  }
}
```

`barGuard` serves as a factory provider function and returns a lambda expression, a so-called arrow function in TypeScript terms.
The call signature of the lambda is equivalent to that defined by the `canActivate()` function in the `CanActivate` interface.

The guard implementation must yet be hooked into Angular's dependency injection.
For that purpose, a factory provider will be registered with `{ provide: BAR_GUARD_TOKEN, useFactory: barGuard }`.
In the route definition, the guard is referenced by `BAR_GUARD_TOKEN`, i.e. `canActivate: [ BAR_GUARD_TOKEN ]`.

When activating the '/bar' route, Angular resolves the token, executes the factory function,
and calls the lambda expression returned by the factory.
The return value of the lambda expression tells the router to either allow (returning `true`)
or deny (returning `false`) navigation.
If allowed, the component shows up on the screen telling you that "bar works!".

Using the guard in a route definition looks a little bit different for the object-oriented and the functional approach.
The following code snippet gives us a good understanding showing how things are wired up:

```ts
const routes: Routes = [
  /* .. */
  {
    path: 'foo',
    component: FooComponent,
    canActivate: [ FooGuard ]
  },
  {
    path: 'bar',
    component: BarComponent,
    canActivate: [ BAR_GUARD_TOKEN ]
  }
  /* .. */
];

@NgModule({
  /* .. */
  providers: [
    FooGuard, // <-- a class provider
    { // --> a factory provider
      provide: BAR_GUARD_TOKEN,
      useFactory: barGuard
    }
  ]
})
export class AppRoutingModule { }
```


#### Advanded functional programming with the Angular router

In the same way that `CanActivate` guards are implemented in functional programming style,
it's also possible to implement `Resolve`.

Again, write a factory that returns a lambda expression whose call signature is equivalent to `Resolve#resolve()`.
It needs to registered with dependency injection and referenced in route definition by its corresponding token `FOOBAR_RESOLVER_ALPHA`.

```ts
export const FOOBAR_RESOLVER_ALPHA = new InjectionToken<Resolve<any>>('foobar-resolver.alpha');

export function foobarResolverAlpha() {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<any> | Promise<any> | any => {

    return Observable.of({ foo: 'bar' }).delay(700); // <-- we're travelling on a sloooow network ;-)
  }
}
```


In object-oriented style, it's possible to inject services into `CanActivate` and
`Resolve` implementations, since both are "annotated" with `@Injectable()` decorator.

In functional programming style, we can do the same thing by writing the dependency as an
argument of the factory function.
To make it work, we need to add the dependency to the factory provider:
`{ provide: FOOBAR_RESOLVER_BETA, useFactory: foobarResolverBeta, deps: [ RemoteDataService ]}`.

An instance of `RemoteDataService` is then injected to the factory function and the
resolve lambda expression returns data by delegating to the service.

```ts
export const FOOBAR_RESOLVER_BETA = new InjectionToken<Resolve<any>>('foobar-resolver.beta');

export function foobarResolverBeta(remoteData: RemoteDataService) {

  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<any> | Promise<any> | any => {

    return remoteData.fetchAllTheThings();
  }

}
```

Again, the functions need to be registered in dependency injection.
For the dependency of `RemoteDataService` to get injected, it needs to be explicitly declared in the factory provider:

```ts
@NgModule({
  providers: [
    {
      provide: FOOBAR_RESOLVER_ALPHA,
      useFactory: foobarResolverAlpha
    },
    {
      provide: FOOBAR_RESOLVER_BETA,
      useFactory: foobarResolverBeta,
      deps: [ RemoteDataService ]
    }
  ]
})
```
