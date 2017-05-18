import {Component, HostListener, Input, OnInit} from "@angular/core";
import {isUndefined} from "util";

@Component({
  selector: 'virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrls: ['./virtual-list.component.scss']
})
export class VirtualListComponent implements OnInit {

  uiDataProvider: any[] = [];
  rowHeight: number = 24;
  height: number = 300;
  scrollTop: number = 0;
  visibleProvider: any[];
  cellsPerPage: number = 0;
  numberOfCells: number = 0;
  canvasHeight: {};

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.uiDataProvider.push({index: i, label: "label " + i, value: "value: " + i});
    }
    this.cellsPerPage = Math.round(this.height / this.rowHeight);
    console.log("cellsPerPage: " + this.cellsPerPage)
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
    console.log('updateDisplayList')
    for (let i = 0; i < this.visibleProvider.length; i++) {
      let topPos = ((firstCell + i) * this.rowHeight);
      console.log('TopPos: ' + topPos);
      this.visibleProvider[i].styles = {
        'top': topPos + "px;"
      };
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    // console.log('updating scrolltop!');
    if (event != null && !isUndefined(event)) {
      // this.scrollTop = event.scrollTop;
      console.log('updating scrolltop!' + event.scrollTop);
      this.updateDisplayList();
    }
  }

  onClickOption() {

  }

}
