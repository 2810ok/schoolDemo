import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAdressComponent } from './city-adress.component';

describe('CityAdressComponent', () => {
  let component: CityAdressComponent;
  let fixture: ComponentFixture<CityAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
