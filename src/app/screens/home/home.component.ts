import { IUserData } from './../../shared/models/dataUser';
import { UsersService } from './../../core/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  error = false;
  dataUser: IUserData[] = []

  constructor(
    private matDialog: MatDialog,
    private UserService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    try {
        this.UserService.getUsers('10').subscribe({
          next: response => this.dataUser = response.results,
          error: (error) => {console.log(error), this.error = true;},
          complete: () => {this.loading = false;}
        })
    } catch (error){
        console.log(error);
    }
  }

  openModal() {
    const dialogRef = this.matDialog.open(ModalComponent, {
      minWidth: 500,
      data: {
        message: 'Hello World',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}
