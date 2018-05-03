import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// app main component
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// pages
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardFirstTimeComponent } from './pages/00-dashboard-first-time/dashboard-first-time.component';
import { DashboardComponent } from './pages/01-dashboard/dashboard.component';
import { LearningCategoriesComponent } from './pages/02-learning-categories/learning-categories.component';
import { ProgrammingAllComponent } from './pages/03-programming-all/programming-all.component';
import { ProgrammingLearningAreasComponent } from './pages/04-programming-learning-areas/programming-learning-areas.component';
import { LearnJavascriptAreaComponent } from './pages/05-learn-javascript-area/learn-javascript-area.component';
import { MentorProfileComponent } from './pages/08-mentor-profile/mentor-profile.component';
import { MyConnectionsComponent } from './pages/12-my-connections/my-connections.component';
import { MenteeProfileEditComponent } from './pages/22-mentee-profile-edit/mentee-profile-edit.component';

// reusable components
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { AreasListComponent } from './components/areas-list/areas-list.component';
import { LearningAreasListComponent } from './components/learning-areas-list/learning-areas-list.component';
import { CategoryAndAreaListComponent } from './components/category-and-area-list/category-and-area-list.component';
import { ReviewPanelComponent } from './components/review-panel/review-panel.component';

import { SharedModule } from './shared/shared.module';
import { DataListService } from './shared/data-list/data-list.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    DashboardFirstTimeComponent,
    DashboardComponent,
    LearningCategoriesComponent,
    ProgrammingAllComponent,
    ProgrammingLearningAreasComponent,
    LearnJavascriptAreaComponent,
    MentorProfileComponent,
    MyConnectionsComponent,
    MenteeProfileEditComponent,

    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    AreasListComponent,
    LearningAreasListComponent,
    CategoryAndAreaListComponent,
    ReviewPanelComponent,
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            NgbModule.forRoot(),
            SharedModule.forRoot(),
            AppRoutingModule,
           ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
