import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { FooGuard } from './foo/foo.guard';
import { BAR_GUARD_TOKEN, barGuard } from './bar/bar.guard';

const routes: Routes = [
  {
    path: '',
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    FooGuard,
    {
      provide: BAR_GUARD_TOKEN,
      useFactory: barGuard
    }
  ]
})
export class AppRoutingModule { }
