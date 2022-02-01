import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTagsComponent } from './side-tags.component';

describe('SideTagsComponent', () => {
  let component: SideTagsComponent;
  let fixture: ComponentFixture<SideTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
