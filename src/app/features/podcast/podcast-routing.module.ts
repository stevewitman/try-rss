import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastListComponent } from './podcast-list/podcast-list.component';

const routes: Routes = [
  {
    path: '',
    component: PodcastListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
