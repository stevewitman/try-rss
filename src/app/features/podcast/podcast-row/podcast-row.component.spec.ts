import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastRowComponent } from './podcast-row.component';

describe('PodcastRowComponent', () => {
  let component: PodcastRowComponent;
  let fixture: ComponentFixture<PodcastRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
