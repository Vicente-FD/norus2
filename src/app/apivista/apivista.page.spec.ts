import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApivistaPage } from './apivista.page';

describe('ApivistaPage', () => {
  let component: ApivistaPage;
  let fixture: ComponentFixture<ApivistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApivistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
