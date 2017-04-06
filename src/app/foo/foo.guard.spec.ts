import { TestBed, async, inject } from '@angular/core/testing';

import { FooGuard } from './foo.guard';

describe('FooGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooGuard]
    });
  });

  it('should ...', inject([FooGuard], (guard: FooGuard) => {
    expect(guard).toBeTruthy();
  }));
});
