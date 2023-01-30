import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule
} from '@angular/material/menu';
import {MatListModule
} from '@angular/material/list';
import {MatIconModule
} from '@angular/material/icon';
import {MatToolbarModule
} from '@angular/material/toolbar';
import {MatCardModule
} from '@angular/material/card';
import {MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,MatIconModule,
    MatMenuModule,MatToolbarModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,MatSelectModule,
    MatDatepickerModule,MatNativeDateModule,
    MatButtonToggleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
