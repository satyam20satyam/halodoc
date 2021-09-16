import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private readonly searchService: SearchService) {}
  searchVal: string = '';
  source: string = 'halodocs';
  searchResult$!: Observable<any>;
  ngOnInit(): void {
    this.search();
  }

  search() {
    this.searchResult$ = this.searchService.search(this.searchVal, this.source);
  }
}
