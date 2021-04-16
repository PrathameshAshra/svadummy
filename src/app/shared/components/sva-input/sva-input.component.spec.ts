/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvaInputComponent } from './sva-input.component';

describe('SvaInputComponent', () => {
  let component: SvaInputComponent;
  let fixture: ComponentFixture<SvaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
