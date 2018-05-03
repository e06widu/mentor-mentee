import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes/routes.module';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DataService } from './services/data.service';
import { DashboardStatusCardComponent } from './components/dashboard-status-card/dashboard-status-card.component';
import { DashboardMentorComponent } from './components/dashboard-mentor/dashboard-mentor.component';
import { LearningRequestComponent } from './components/learning-request/learning-request.component';
import { MoreComponent } from './components/more/more.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LearningAreaComponent } from './components/learning-area/learning-area.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { LearningAreasComponent } from './pages/learning-areas/learning-areas.component';
import { LearningCardComponent } from './components/learning-card/learning-card.component';
import { LearningTableRowComponent } from './components/learning-table-row/learning-table-row.component';
import { DashboardMentorCardComponent } from './components/dashboard-mentor-card/dashboard-mentor-card.component';
import { ShareDocumentModalComponent } from './components/share-document-modal/share-document-modal.component';
import { FileDropZoneComponent } from './components/file-drop-zone/file-drop-zone.component';
import { BulkUploadComponent } from './components/bulk-upload/bulk-upload.component';
import { CreateLearningAreaComponent } from './pages/create-learning-area/create-learning-area.component';
import { PreviewComponent } from './components/preview/preview.component';
import { MentorSelectComponent } from './components/mentor-select/mentor-select.component';
import { MentorPipe } from './pipes/mentor.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardStatusCardComponent,
    DashboardMentorComponent,
    LearningRequestComponent,
    MoreComponent,
    DropdownComponent,
    LearningAreaComponent,
    AccountListComponent,
    LearningAreasComponent,
    LearningCardComponent,
    LearningTableRowComponent,
    DashboardMentorCardComponent,
    ShareDocumentModalComponent,
    FileDropZoneComponent,
    BulkUploadComponent,
    CreateLearningAreaComponent,
    PreviewComponent,
    MentorSelectComponent,
    MentorPipe,
    OrderByPipe
  ],
  imports: [
    HttpClientModule,
    RoutesModule,
    FormsModule,
    BrowserModule,
    NgxCarouselModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
