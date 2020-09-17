import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() searchItem: ISearchItem;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickMoreInfo() {
    this.router.navigate(['/main/detail', this.searchItem.id]);
  }

  getDiffDays() {
    const date1 = new Date(this.searchItem.snippet.publishedAt);
    const date2 = new Date();

    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
