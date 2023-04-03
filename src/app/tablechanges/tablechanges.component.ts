import { Component } from '@angular/core';

@Component({
  selector: 'app-tablechanges',
  templateUrl: './tablechanges.component.html',
  styleUrls: ['./tablechanges.component.scss'],
})
export class TablechangesComponent {
  selectedCity: any;
  checkall(checkbox: any, isChecked: boolean) {
    const checkboxes = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === 'checkbox') {
        checkboxes[i].checked = isChecked;
      }
    }
  }
  colors = [
    { name: 'Red', color: '#ff0000' },
    { name: 'Blue', color: '#0000ff' },
    { name: 'Green', color: '#00ff00' },
    { name: 'pink', color: '#ffc0cb' },
  ];
  checkboxes: HTMLInputElement[] = [];
  rowcolors = new Array(this.colors.length).fill('#aeb0b5');
  selectedcolor = '';

  changerowcolor() {
    for (let i = 0; i < this.rowcolors.length; i++) {
      this.rowcolors[i] = this.selectedcolor;
    }
  }
}
