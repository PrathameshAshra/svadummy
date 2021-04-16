/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

<<<<<<< HEAD
=======
<<<<<<< HEAD:src/app/shared/components/sva-button/sva-button.component.spec.ts
import { SvaButtonComponent } from './sva-button.component';

describe('SvaButtonComponent', () => {
  let component: SvaButtonComponent;
  let fixture: ComponentFixture<SvaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvaButtonComponent ]
=======
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
<<<<<<< HEAD
=======
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f:src/app/modules/layout/views/dashboard/dashboard.component.spec.ts
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(DashboardComponent);
=======
<<<<<<< HEAD:src/app/shared/components/sva-button/sva-button.component.spec.ts
    fixture = TestBed.createComponent(SvaButtonComponent);
=======
    fixture = TestBed.createComponent(DashboardComponent);
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f:src/app/modules/layout/views/dashboard/dashboard.component.spec.ts
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
