import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectValueBindingComponent } from './select-value-binding.component';

describe('SelectValueBindingComponent', () => {
  let component: SelectValueBindingComponent;
  let fixture: ComponentFixture<SelectValueBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectValueBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectValueBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
