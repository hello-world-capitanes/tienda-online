import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrenghBarComponent } from './strengh-bar.component';

describe('StrenghBarComponent', () => {
  let component: StrenghBarComponent;
  let fixture: ComponentFixture<StrenghBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrenghBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrenghBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
