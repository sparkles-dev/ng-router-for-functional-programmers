import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDumpComponent } from './json-dump/json-dump.component';
import { RemoteDataService } from './remote-data.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ JsonDumpComponent ],
  exports: [ JsonDumpComponent ]
})
export class SharedModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,
      providers: [
        RemoteDataService
      ]
    };
  }
}
