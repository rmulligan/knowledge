import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FileUploadComponent } from './ingest/file-upload/file-upload.component';
import { WebsiteExtractionComponent } from './ingest/website-extraction/website-extraction.component';
import { FileUploadDragAndDropComponent } from './ingest/file-upload/file-upload-drag-and-drop/file-upload-drag-and-drop.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { FileUploadAdvancedComponent } from './ingest/file-upload/file-upload-advanced/file-upload-advanced.component';
import { WebsiteExtractionFormComponent } from './ingest/website-extraction/website-extraction-form/website-extraction-form.component';
import { SearchComponent } from './search/search.component';
import { DragAndDropDirective } from './ingest/file-upload/directives/drag-and-drop.directive';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    WebsiteExtractionComponent,
    FileUploadDragAndDropComponent,
    FileUploadAdvancedComponent,
    WebsiteExtractionFormComponent,
    SearchComponent,
    DragAndDropDirective,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare global {
  interface Window {
    api?: any;
  }
}
