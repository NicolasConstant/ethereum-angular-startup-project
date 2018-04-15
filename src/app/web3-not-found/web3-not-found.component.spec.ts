import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3NotFoundComponent } from './web3-not-found.component';

describe('Web3NotFoundComponent', () => {
  let component: Web3NotFoundComponent;
  let fixture: ComponentFixture<Web3NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Web3NotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Web3NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
