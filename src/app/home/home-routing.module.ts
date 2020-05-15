import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/users',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: 'albums/:id', component: AlbumItemComponent},
      {path: 'photos', component: PhotosComponent},
      {path: 'photos/:id', component: PhotoItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
