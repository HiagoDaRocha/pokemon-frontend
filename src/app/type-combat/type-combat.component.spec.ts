import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCombatComponent } from './type-combat.component';

describe('TypeCombatComponent', () => {
  let component: TypeCombatComponent;
  let fixture: ComponentFixture<TypeCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeCombatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
