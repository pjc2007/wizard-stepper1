import { TestBed } from '@angular/core/testing';

import { StepPagesService } from './step-pages.service';

describe('StepPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepPagesService = TestBed.get(StepPagesService);
    expect(service).toBeTruthy();
  });
});
