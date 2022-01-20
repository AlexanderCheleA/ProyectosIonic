import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalenvioPage } from './modalenvio.page';

describe('ModalenvioPage', () => {
  let component: ModalenvioPage;
  let fixture: ComponentFixture<ModalenvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalenvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalenvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
