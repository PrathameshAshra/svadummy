/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

<<<<<<< HEAD:src/app/modules/layout/views/dashboard/dashboard.component.spec.ts
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
=======
import { SvaSaperatorComponent } from './sva-saperator.component';

describe('SvaSaperatorComponent', () => {
  let component: SvaSaperatorComponent;
  let fixture: ComponentFixture<SvaSaperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvaSaperatorComponent ]
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f:src/app/shared/sva-saperator/sva-saperator.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/modules/layout/views/dashboard/dashboard.component.spec.ts
    fixture = TestBed.createComponent(DashboardComponent);
=======
    fixture = TestBed.createComponent(SvaSaperatorComponent);
>>>>>>> d7e003eb504ac7aedfa10bd15219e3405276f85f:src/app/shared/sva-saperator/sva-saperator.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
