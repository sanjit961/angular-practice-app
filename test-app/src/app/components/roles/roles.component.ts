import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResonseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  // string, number, date, boolean, object, array, null, undefined
  // firstName: string = "Sanjit";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // angularVersion = 'Version 18';
  // inputType: string = 'radio';
  // selectedState: string = 'AS'

  // showWelcomeAlert() {
  //   alert("Welcome to Angular 18")
  // }
  // showMessage(message: string) {
  //   alert(message)
  // }

  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles()
  }
  getAllRoles() {
    this.http.get<APIResonseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResonseModel) => {
      this.roleList = res.data;
    })
  }
}
