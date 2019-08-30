import { NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [],
  })
  export class MaterialModule { }
  