import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class TableComponent implements OnInit {
  rows: any;
  isActive: boolean = false;
  tableform: FormGroup;
  submitted: boolean;
  isformvalid: boolean;
  formArray: any[] = [];
  exampleModal: any;
  isEditing: boolean[] = [];
  editedItem: any = null;
  editRowIndex: number | null = null;
  searchTerm: string = '';
  formDataArr2: any[] = [];
  formDataArr: any[] = [];
  data: any[] = [
    /* your data array */
  ];
  sortDirection = 'asc';
  currentPage: number = 1;
  pageSize = 5;
  totalItems: number;
  page: any = 1;
  myData: any;
  nameSearchTerm: string = '';
  titleSearchTerm: string = '';
  statusSearchTerm: string = '';
  positionSearchTerm: string = '';
  itemsPerPage: number = 10;
  constructor(
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private router: Router
  ) {}

  updateRow(i: number) {
    this.isEditing[i] = false;
  }
  editRow(i: number) {
    // Set the editRowIndex to the index of the row being edited
    this.editRowIndex = i;
    // Create a new object containing the data of the row being edited
    const data = {
      name: this.formDataArr[i].name,
      title: this.formDataArr[i].title,
      status: this.formDataArr[i].status,
      position: this.formDataArr[i].position,
    };
    // Update the form with the data of the row being edited
    this.tableform.setValue(data);
  }

  cancelEdit(i: number) {
    this.formDataArr[i] = { ...this.editedItem };
    this.isEditing[i] = false;
    this.editedItem = null;
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }

  tableformdata() {
    this.tableform = this.fb.group({
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      status: ['', [Validators.required]],
      position: ['', [Validators.required]],
    });
  }

  addDetails() {
    this.tableformdata();
    this.updateRow(0);
  }

  submittable() {
    this.submitted = true;
    console.log('tableform', this.tableform.value);
    if (this.tableform.valid) {
      const formData = this.tableform.value;
      let isFormDataUpdated = false;
      if (this.editRowIndex !== null) {
        // check if editing an existing row
        const previousFormData = this.formDataArr[this.editRowIndex];
        isFormDataUpdated =
          JSON.stringify(formData) !== JSON.stringify(previousFormData);
        this.formDataArr[this.editRowIndex] = formData; // update existing data
        this.editRowIndex = null; // reset editRowIndex
      } else {
        isFormDataUpdated = true;
        this.formDataArr.push(formData); // add new data
      }
      // Store updated form data array in sessionStorage
      sessionStorage.setItem('formdata', JSON.stringify(this.formDataArr));
      // Update formDataArr2 with the latest data from sessionStorage
      this.formDataArr2 = JSON.parse(
        sessionStorage.getItem('formdata') || '[]'
      );
      console.log('formDataArr2', this.formDataArr2);

      // Display toaster message only if form data is updated
      if (isFormDataUpdated) {
        this.toasterService.success('Details of employee updated', ' Success!');
      }
    } else {
      this.toasterService.error('Please Enter All Fields!', 'Title Error!');
    }
  }


  filterData() {
    return this.formDataArr2.filter(item => {
      // if (this.nameSearchTerm && !item.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase())) {
      //   return false;
      // }
      // if (this.titleSearchTerm && !item.title.toLowerCase().includes(this.titleSearchTerm.toLowerCase())) {
      //   return false;
      // }
      // if (this.statusSearchTerm && !item.status.toLowerCase().includes(this.statusSearchTerm.toLowerCase())) {
      //   return false;
      // }
      // if (this.positionSearchTerm && !item.position.toLowerCase().includes(this.positionSearchTerm.toLowerCase())) {
      //   return false;
      // }
      if (this.searchTerm && (
        !item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.status.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.position.toLowerCase().includes(this.searchTerm.toLowerCase())
      )) {
        return false;
      }

      // check individual search terms
      if (this.nameSearchTerm && !item.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase())) {
        return false;
      }
      if (this.titleSearchTerm && !item.title.toLowerCase().includes(this.titleSearchTerm.toLowerCase())) {
        return false;
      }
      if (this.statusSearchTerm && !item.status.toLowerCase().includes(this.statusSearchTerm.toLowerCase())) {
        return false;
      }
      if (this.positionSearchTerm && !item.position.toLowerCase().includes(this.positionSearchTerm.toLowerCase())) {
        return false;
      }
      // if no specific search terms and no global search term, include item
      if (!this.searchTerm && !this.nameSearchTerm && !this.titleSearchTerm && !this.statusSearchTerm && !this.positionSearchTerm) {
        return true;
      }
      return true;
    });
  }




  sortData(columnName: string) {
    this.formDataArr2.sort((a, b) => {
      if (a[columnName] < b[columnName]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[columnName] > b[columnName]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.toggleSortDirection();
  }
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  deleteRow(index: number) {
    // Remove the element at the specified index from the formDataArr
    this.formDataArr.splice(index, 1);
    // Update the formDataArr stored in sessionStorage
    sessionStorage.setItem('formdata', JSON.stringify(this.formDataArr));
    // Update the formDataArr2 array used to display the table
    this.formDataArr2 = JSON.parse(sessionStorage.getItem('formdata') || '[]');
    this.toasterService.success('Employee details deleted', ' Success!');
  }
  get() {
    return sessionStorage.getItem('formdata');
  }
  ngOnInit() {
    this.tableformdata();
  }
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
