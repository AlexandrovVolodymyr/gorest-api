import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../interfaces/photos';

@Pipe({
  name: 'searchImageTitle'
})
export class SearchImageTitlePipe implements PipeTransform {

  transform(photos: Photos[], value = ''): Photos[] {
    if (!value) {
      return photos;
    }

    return photos.filter(photo => {
      return photo.title.toLowerCase().includes(value.toLowerCase());
    });
  }
}
