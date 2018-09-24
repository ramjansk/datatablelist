import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTable, MatTableDataSource} from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource;
 displayedColumns = ["name", "username", "email"];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(results => {
      if(!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
    })
  }

}
