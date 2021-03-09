/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpashComponent } from './spash.component';

describe('SpashComponent', () => {
  let component: SpashComponent;
  let fixture: ComponentFixture<SpashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
