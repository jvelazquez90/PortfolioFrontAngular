import { TestBed } from '@angular/core/testing';

import { EditableService } from './editable.service';

describe('EditableService', () => {
  let service: EditableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
