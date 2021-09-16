import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  detailsData: any;
  constructor(
    private readonly searchService: SearchService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  searchDetails(author: string) {
    this.router.navigate(['/details', author]);
    this.searchService.searchDetails(author).subscribe((val) => {
      this.detailsData = val;
    });
  }
}
