import { TestBed } from '@angular/core/testing';

import { MqmService } from './mqm.service';

describe('MqmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MqmService = TestBed.get(MqmService);
    expect(service).toBeTruthy();
  });
});
