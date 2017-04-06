import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooBarComponent } from './foo-bar/foo-bar.component';

const routes: Routes = [
  {
    path: '',
    component: FooBarComponent
  }
];

/** A lazy-loaded module demonstrating more complex use-cases. */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooBarComponent]
})
export class FooBarModule { }
