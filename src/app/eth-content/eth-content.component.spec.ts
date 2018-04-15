import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthContentComponent } from './eth-content.component';

describe('EthContentComponent', () => {
  let component: EthContentComponent;
  let fixture: ComponentFixture<EthContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
