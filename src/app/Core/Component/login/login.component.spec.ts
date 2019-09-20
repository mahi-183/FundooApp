import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, DebugElement} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        ImageCropperModule,
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      element=de.nativeElement;  
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('login form should be valid', async(() => {
    component.loginForm.controls['userName'].setValue('mahesh')
    component.loginForm.controls['password'].setValue('Mahi183@')
    expect(component.loginForm.valid).toBeTruthy();
  }));
  it('login form should be valid', async(() => {
    component.loginForm.controls['userName'].setValue('')
    component.loginForm.controls['password'].setValue('')
    expect(component.loginForm.invalid).toBeFalsy();
  }));
});
