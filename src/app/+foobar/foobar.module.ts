import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooBarComponent } from './foo-bar/foo-bar.component';
import { JsonDumpComponent } from '../shared/json-dump/json-dump.component';
import { FOOBAR_RESOLVER_ALPHA, foobarResolverAlpha, FOOBAR_RESOLVER_BETA, foobarResolverBeta } from './foobar.resolver';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: JsonDumpComponent,
    resolve: {
      foo: FOOBAR_RESOLVER_ALPHA,
      bar: FOOBAR_RESOLVER_BETA
    }
  }
];

/** A lazy-loaded module demonstrating more complex use-cases. */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [FooBarComponent],
  providers: [
    {
      provide: FOOBAR_RESOLVER_ALPHA,
      useFactory: foobarResolverAlpha
    },
    {
      provide: FOOBAR_RESOLVER_BETA,
      useFactory: foobarResolverBeta
    }
  ]
})
export class FooBarModule { }
