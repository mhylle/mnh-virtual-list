import {Component, HostListener, Input, OnInit} from "@angular/core";

@Component({
  selector: 'virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrls: ['./virtual-list.component.scss']
})
export class VirtualListComponent implements OnInit {

  uiDataProvider: any[] = [];
  rowHeight: number = 30;
  height: number = 200;
  scrollTop: number = 0;
  visibleProvider: any[];
  cellsPerPage: number = 0;
  numberOfCells: number = 0;
  canvasHeight: {};

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.uiDataProvider.push({index: i, label: "label " + i, value: "value: " + i});
    }
    this.cellsPerPage = Math.round(this.height / this.rowHeight);
    this.numberOfCells = 3 * this.cellsPerPage;
    let number = this.uiDataProvider.length * this.rowHeight;
    console.log("number: " + number);
    this.canvasHeight = {
      height: number + 'px'
    };
    this.updateDisplayList();
  }

  updateDisplayList() {
    let firstCell = Math.max(Math.floor(this.scrollTop / this.rowHeight) - this.cellsPerPage, 0);
    let cellsToCreate = Math.min(firstCell + this.numberOfCells, this.numberOfCells);
    this.visibleProvider = this.uiDataProvider.slice(firstCell, firstCell + cellsToCreate);

    for (let i = 0; i < this.visibleProvider.length; i++) {
      this.visibleProvider[i].styles = {
        'top': ((firstCell + i) * this.rowHeight) + "px"
      };
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.scrollTop = event.scrollTop;
    this.updateDisplayList();
  }

  onClickOption() {

  }

}
