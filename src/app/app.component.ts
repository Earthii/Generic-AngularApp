import { ImageService } from './services/image.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Memestream-web';

  constructor(private imageService: ImageService) {
    this.imageService.get().subscribe(res => {
      console.log(res);
    });
  }
}
