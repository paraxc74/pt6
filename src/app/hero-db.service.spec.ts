import { TestBed, inject } from '@angular/core/testing';

import { HeroDBService } from './hero-db.service';

describe('HeroDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDBService]
    });
  });

  it('should be created', inject([HeroDBService], (service: HeroDBService) => {
    expect(service).toBeTruthy();
  }));
});
