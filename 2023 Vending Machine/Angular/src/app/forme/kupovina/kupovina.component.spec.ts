import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovinaComponent } from './kupovina.component';

describe('KupovinaComponent', () => {
  let component: KupovinaComponent;
  let fixture: ComponentFixture<KupovinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KupovinaComponent],
    });
    fixture = TestBed.createComponent(KupovinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
