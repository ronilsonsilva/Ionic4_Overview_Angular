import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapacitorCameraPage } from './capacitor-camera.page';

describe('CapacitorCameraPage', () => {
  let component: CapacitorCameraPage;
  let fixture: ComponentFixture<CapacitorCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitorCameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapacitorCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
