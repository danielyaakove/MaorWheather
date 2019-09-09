/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavorietComponent } from './favoriet.component';

describe('FavorietComponent', () => {
  let component: FavorietComponent;
  let fixture: ComponentFixture<FavorietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
