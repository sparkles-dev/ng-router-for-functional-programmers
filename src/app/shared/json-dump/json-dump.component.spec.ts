import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDumpComponent } from './json-dump.component';

describe('JsonDumpComponent', () => {
  let component: JsonDumpComponent;
  let fixture: ComponentFixture<JsonDumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
