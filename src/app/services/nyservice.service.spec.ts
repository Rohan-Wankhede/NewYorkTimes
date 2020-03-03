import { TestBed } from '@angular/core/testing';

import { NYServiceService } from './nyservice.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


describe('NYServiceService', () => {
  let service: NYServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NYServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
