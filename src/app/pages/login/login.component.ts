import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserUtil } from 'src/app/util/user.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;

  constructor(private service: DataService, private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.service.auth(this.login.value)
      .subscribe(
        (res: User) => {
          UserUtil.save(res.token);
          this.router.navigate(['']);
        }
      );
  }
}
