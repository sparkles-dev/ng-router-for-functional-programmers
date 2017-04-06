import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDumpComponent } from './json-dump/json-dump.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ JsonDumpComponent ],
  exports: [ JsonDumpComponent ]
})
export class SharedModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
