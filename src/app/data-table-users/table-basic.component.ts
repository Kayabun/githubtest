import {Component, OnInit, OnDestroy} from '@angular/core';



export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, firstname: 'Hydrogen', lastname: 'Oxygen', email: 'H'},
  {id: 2, firstname: 'Helium', lastname: 'Oxygen', email: 'He'},
  {id: 3, firstname: 'Lithium', lastname: 'Oxygen', email: 'Li'},
  {id: 4, firstname: 'Beryllium', lastname: 'Oxygen', email: 'Be'},
  {id: 5, firstname: 'Boron', lastname: 'Oxygen', email: 'B'},
  {id: 6, firstname: 'Carbon', lastname: 'Oxygen', email: 'C'},
  {id: 7, firstname: 'Nitrogen', lastname: 'Oxygen', email: 'N'},
  {id: 8, firstname: 'Oxygen', lastname: 'Oxygen', email: 'O'},
];


@Component({
  selector: 'app-data-table-users',
  styleUrls: ['table-basic.component.css'],
  templateUrl: 'table-basic.component.html',
})
export class TableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  dataSource = ELEMENT_DATA;
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];


  ngOnInit() {}

  ngOnDestroy() {}
}

