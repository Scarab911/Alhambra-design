import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSocialsComponent } from './side-socials.component';

describe('SideSocialsComponent', () => {
  let component: SideSocialsComponent;
  let fixture: ComponentFixture<SideSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
