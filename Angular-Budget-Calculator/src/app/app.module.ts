import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-card/budget-item-card.component';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdditemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
