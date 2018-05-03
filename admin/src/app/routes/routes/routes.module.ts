import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {LearningAreasComponent} from '../../pages/learning-areas/learning-areas.component';
import {CreateLearningAreaComponent} from '../../pages/create-learning-area/create-learning-area.component';

const routes: Routes = [
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'admin/learning-areas', component: LearningAreasComponent},
  {path: 'admin/learning-areas/create', component: CreateLearningAreaComponent},
  {path: '**', redirectTo: '/admin/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {
}
