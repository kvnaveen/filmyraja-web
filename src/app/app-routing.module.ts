import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentListComponent } from './content-list/content-list.component'

const routes: Routes = [
  { path: "reviews", component: ContentListComponent },
  { path: "news", component: ContentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
