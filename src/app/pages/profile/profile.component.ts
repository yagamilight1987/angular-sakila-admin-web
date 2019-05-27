import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData$: Observable<any>;
  isEdit: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isEdit = false;
    this.userData$ = this.userService.getLoggedInUserDetails(
      this.userService.id
    );
  }

  onEditClicked() {
    this.isEdit = true;
  }

  onCancelClicked() {
    this.isEdit = false;
  }

  onSaveClicked() {
    this.isEdit = false;
    // TODO
  }
}
