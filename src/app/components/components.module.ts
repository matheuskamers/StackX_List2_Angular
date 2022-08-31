import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
