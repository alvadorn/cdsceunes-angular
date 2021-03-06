import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';


@Component({
  selector: 'app-department-form',
  templateUrl: './departments-form.component.html',
  styleUrls: [ './departments-form.component.css' ]
})

export class DepartmentsFormComponent {
  department = new Department();

  constructor (
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.departmentService.createComplete(
        this.department.name, this.department.center).then(() => this.goBack());
  }

  newDepartment() {
    this.department = new Department();
  }

  goBack(): void {
    this.location.back();
  }
}
