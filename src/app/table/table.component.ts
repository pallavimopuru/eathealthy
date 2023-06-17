import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  Component,
  ElementRef,
  Injectable,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { from, toArray ,filter,map} from 'rxjs';
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
  selectedcolor: string;
  selectedFiles: File[] = [];
  fileData: string;
  fileDataList: { file: File; name: string; base64Data: string }[] = [];
  file: File;
  name: string;
  base64Data: string;
  values = [1, 2, 3, 4, 5];
  valuearrobj = [
    { name: 'john', age: 23 },
    { name: 'henry', age: 20 },
    { name: 'ajay', age: 27 },
    { name: 'priya', age: 33 },
    { name: 'mehrin', age: 39 },
  ];
  dataArr = [
    { name: 'ajay', age: 23, id: '1' },
    { name: 'pranay', age: 20, id: '2' },
    { name: 'henshi', age: 27, id: '3' },
    { name: 'dinesh', age: 33, id: '4' },
    { name: 'priya', age: 39, id: '5' },
  ];
  public newArray1: any[] = [];
  public newarraymap: any[] = [];
  public maparr1: string[] = []; // Assuming it is an array of strings
  public newArray: any[] = [];
  public maparr: any[] = [];
  dataarray:any;
  reduce: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private toastrService: ToastrService
  ) {}
  // Your method where you perform the filtering, mapping, and reducing
  yourMethod() {
    // Filter the values and assign to newArray
    this.newArray = this.values.filter((data) => {
      return data * 2;
    });
    console.log('newArray', this.newArray);
    // Filter the valuearrobj and assign to newArray1
    this.newArray1 = this.valuearrobj.filter((data) => {
      return data.age > 20;
    });

    console.log('newArray1', this.newArray1);

    // Map the values and assign to maparr
    this.maparr = this.values.map((value) => {
      return value * 2;
    });
    console.log('maparr', this.maparr);

    // Map the valuearrobj and assign to maparr1
    this.maparr1 = this.valuearrobj.map((value) => {
      return 'Mr. ' + value.name;
    });
    console.log('maparr1', this.maparr1);

    // Reduce the values and assign to reduce
    this.reduce = this.values.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    console.log('reduce', this.reduce);
//by using from operator we can convert array to observable
const source = from(this.dataArr);

source.pipe(
  filter((data) => data.name.length > 6),
  map((data)=>data.name)
).subscribe((res) => {
  this.dataarray = res;
  console.log('dataArrsubscribe', res);
});
  }
  // ================================
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
      color: this.formDataArr[i].color,
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
      color: ['', [Validators.required]],
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
        this.toastrService.success('Details of employee updated', ' Success!');
      }
    } else {
      this.toastrService.error('Please Enter All Fields!', 'Title Error!');
    }
  }

  filterData() {
    return this.formDataArr2.filter((item) => {
      if (
        this.searchTerm &&
        !item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.status.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !item.position.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) {
        return false;
      }

      // check individual search terms
      if (
        this.nameSearchTerm &&
        !item.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase())
      ) {
        return false;
      }
      if (
        this.titleSearchTerm &&
        !item.title.toLowerCase().includes(this.titleSearchTerm.toLowerCase())
      ) {
        return false;
      }
      if (
        this.statusSearchTerm &&
        !item.status.toLowerCase().includes(this.statusSearchTerm.toLowerCase())
      ) {
        return false;
      }
      if (
        this.positionSearchTerm &&
        !item.position
          .toLowerCase()
          .includes(this.positionSearchTerm.toLowerCase())
      ) {
        return false;
      }
      // if no specific search terms and no global search term, include item
      if (
        !this.searchTerm &&
        !this.nameSearchTerm &&
        !this.titleSearchTerm &&
        !this.statusSearchTerm &&
        !this.positionSearchTerm
      ) {
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
    this.toastrService.success('Employee details deleted', ' Success!');
  }
  get() {
    return sessionStorage.getItem('formdata');
  }
  rowcolors: string[] = new Array(this.filterData().length).fill('#aeb0b5');

  colors = [
    { name: 'Red', color: '#ff0000' },
    { name: 'Blue', color: '#0000ff' },
    { name: 'Green', color: '#00ff00' },
    { name: 'Pink', color: '#ffc0cb' },
  ];
  changerowcolor(i: number) {
    console.log('Selected color:', this.selectedcolor);
    const element = this.elRef.nativeElement.querySelector(`#row-${i}`);
    element.classList.add('my_class2');
    this.rowcolors[i] = this.selectedcolor;
    // Set the color property of the corresponding item in filterData() array
    this.filterData()[i].color = this.selectedcolor;
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedFiles.push(file);
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileData = {
        file: file,
        name: file.name,
        base64Data: reader.result as string,
        fileType: file.type.split('/')[1], // Extract file extension from MIME type
      };
      this.fileDataList.push(fileData);
    };
  }

  downloadFiles(file) {
    this.fileDataList.forEach((fileData) => {
      const base64Data = fileData.base64Data;
      const fileName = fileData.name;

      // Convert base64 to blob
      const byteString = atob(base64Data.split(',')[1]);
      const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      // Create a temporary link element
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = fileName;

      // Programmatically trigger the click event on the link
      downloadLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      // Clean up the temporary link and object URL
      URL.revokeObjectURL(downloadLink.href);
    });
  }

  isSupportedFile(extension: string): boolean {
    const supportedExtensions = [
      'pdf',
      'xlsx',
      'doc',
      'docx',
      'xls',
      'xlsb',
      'xlsm',
      'csv',
      'png',
      'jpg',
      'jpeg',
    ];
    return supportedExtensions.includes(extension.toLowerCase());
  }
  deleteFile(file: File) {
    const index = this.selectedFiles.indexOf(file);
    if (index !== -1) {
      this.selectedFiles.splice(index, 1);
      this.fileDataList.splice(index, 1);
    }
  }

  ngOnInit() {
    this.tableformdata();
    this.yourMethod();
  }
}
