import { NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    providers: [],
  })
  export class MaterialModule { }
  