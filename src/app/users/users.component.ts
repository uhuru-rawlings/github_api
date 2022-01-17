import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service';
import { Users } from '../users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   users:any = Users;
  constructor(private getuser:GetuserService) { }
  ngOnInit(): void {
  }
  showusers(){
      // this.users = this.getuser.getusers();
      // console.log(this.users);
    this.getuser.getusers().subscribe((data) => {
      this.users = data; 
      
    })
  }
  
}
