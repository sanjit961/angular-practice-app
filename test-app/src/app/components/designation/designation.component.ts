import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResonseModel, IDesignation } from '../../model/interface/role';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result: APIResonseModel) => {
      this.designationList = result.data;
      this.isLoader = false
    }, error => {
      alert("API Error / Network Down")
      this.isLoader = false
    })
  }
}
