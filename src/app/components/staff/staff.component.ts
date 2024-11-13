import {Component, OnInit} from '@angular/core';
import {StaffService} from "../../services/staff.service";
import {PageResponse} from "../../../types";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent implements OnInit {

  constructor(private readonly staffService: StaffService) {
  }

  ngOnInit(): void {
    this.staffService.getAllStaff({page: 0, departments: [], isHod: false, search: "", size: 10, status: "ACTIVE"
    })
      .subscribe((response: PageResponse) => {
        console.log(response);
        console.log(response.data)
      });
  }
}
