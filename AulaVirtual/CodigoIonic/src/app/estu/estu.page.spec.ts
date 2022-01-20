import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstuPage } from './estu.page';

describe('EstuPage', () => {
  let component: EstuPage;
  let fixture: ComponentFixture<EstuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
