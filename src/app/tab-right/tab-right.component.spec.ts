import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRightComponent } from './tab-right.component';

describe('TabRightComponent', () => {
  let component: TabRightComponent;
  let fixture: ComponentFixture<TabRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
