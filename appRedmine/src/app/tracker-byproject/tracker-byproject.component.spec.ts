import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerByprojectComponent } from './tracker-byproject.component';

describe('TrackerByprojectComponent', () => {
  let component: TrackerByprojectComponent;
  let fixture: ComponentFixture<TrackerByprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerByprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerByprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
