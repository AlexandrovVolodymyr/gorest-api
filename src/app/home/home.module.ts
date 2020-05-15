import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchImageTitlePipe } from './pipes/search-image-title.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    PhotosComponent,
    SearchImageTitlePipe,
    HighlightTextPipe,
    PhotoItemComponent,
    AlbumsComponent,
    AlbumItemComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
