import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'mentee/index', component: IndexComponent },
  { path: 'mentee/login', component: LoginComponent },
  { path: 'mentee/register', component: RegisterComponent },
  { path: 'mentee/dashboard-first-time', component: DashboardFirstTimeComponent },
  { path: 'mentee/dashboard', component: DashboardComponent },
  { path: 'mentee/learning-categories', component: LearningCategoriesComponent },
  { path: 'mentee/programming-all', component: ProgrammingAllComponent },
  { path: 'mentee/programming-learning-areas', component: ProgrammingLearningAreasComponent },
  { path: 'mentee/learn-javascript-area', component: LearnJavascriptAreaComponent },
  { path: 'mentee/mentor-profile', component: MentorProfileComponent },
  { path: 'mentee/my-connections', component: MyConnectionsComponent },
  { path: 'mentee/mentee-profile-edit', component: MenteeProfileEditComponent },
  { path: '**', redirectTo: 'mentee/index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
