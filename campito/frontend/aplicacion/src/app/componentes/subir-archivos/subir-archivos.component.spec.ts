import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirArchivosComponent } from './subir-archivos.component';

describe('SubirArchivosComponent', () => {
  let component: SubirArchivosComponent;
  let fixture: ComponentFixture<SubirArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
