import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailPage } from './goal-detail.page';

describe('GoalDetailPage', () => {
  let component: GoalDetailPage;
  let fixture: ComponentFixture<GoalDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
