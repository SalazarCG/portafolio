import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiPageComponent } from './sobre-mi-page.component';

describe('SobreMiPageComponent', () => {
  let component: SobreMiPageComponent;
  let fixture: ComponentFixture<SobreMiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
