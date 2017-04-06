import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { FooGuard } from './foo/foo.guard';

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
        component: BarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    FooGuard
  ]
})
export class AppRoutingModule { }
