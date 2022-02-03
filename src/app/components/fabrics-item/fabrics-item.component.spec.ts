import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricsItemComponent } from './fabrics-item.component';

describe('FabricsItemComponent', () => {
  let component: FabricsItemComponent;
  let fixture: ComponentFixture<FabricsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
