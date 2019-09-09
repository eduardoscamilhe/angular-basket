import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUtil } from 'src/app/util/user.util';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  logout() {
    UserUtil.clearAccess();
    this.route.navigate(['login']);
  }


}
