import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquiryFormLeasePage } from './enquiry-form-lease.page';

describe('EnquiryFormLeasePage', () => {
  let component: EnquiryFormLeasePage;
  let fixture: ComponentFixture<EnquiryFormLeasePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryFormLeasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiryFormLeasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
