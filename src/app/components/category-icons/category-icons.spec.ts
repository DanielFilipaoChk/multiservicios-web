import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIcons } from './category-icons';

describe('CategoryIcons', () => {
  let component: CategoryIcons;
  let fixture: ComponentFixture<CategoryIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
