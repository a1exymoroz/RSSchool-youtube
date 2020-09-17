import { YoutubeService } from './services/youtube.service';
import { SharedModule } from './../shared/shared.module';
import { CardComponent } from './component/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [CatalogComponent, CardComponent, DetailComponent],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  providers: [YoutubeService],
})
export class YoutubeModule {}
