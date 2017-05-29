import {Component, HostListener, OnInit} from "@angular/core";

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
  private currentItem: any;

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.uiDataProvider.push({index: i, label: "label " + i, value: "value: " + i});
    }
    this.cellsPerPage = Math.floor(this.height / this.rowHeight);

    this.numberOfCells = 3 * this.cellsPerPage;
    console.log("cellsPerPage: " + this.cellsPerPage + " numberofCells: " + this.numberOfCells + ", rowHeight: " + this.rowHeight);
    let number = this.uiDataProvider.length * this.rowHeight;
    console.log("number: " + number);
    this.canvasHeight = {
      height: number + 'px'
    };
    this.updateDisplayList();
  }

  updateDisplayList() {
    let firstVisibleCell = this.scrollTop / this.rowHeight;
    // console.log("firstVisibleCell: " + firstVisibleCell + ", scrollTOp: " + this.scrollTop);
    let firstCell = Math.max(Math.floor(firstVisibleCell) - (this.cellsPerPage), 0);
    let cellsToCreate = Math.min(firstCell + this.numberOfCells, this.numberOfCells);

    let lastCell = firstCell + cellsToCreate;
    // console.log("cellsToCreate: " + cellsToCreate + ", firstCell: " + firstCell + ", lastCell: " + lastCell);
    this.visibleProvider = this.uiDataProvider.slice(firstCell, lastCell);

    for (let i = 0; i < this.visibleProvider.length; i++) {
      let topPos = (((firstCell + i) * this.rowHeight ) + (firstCell + i) * 2);
      this.visibleProvider[i].styles = {
        'top': topPos + "px;",
        'padding':0,
        'margin':0,
        'background-color': 'lightgrey',
        'border': '1px solid black'
      };
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    // let tracker = event.target;
    this.scrollTop = event.target.scrollTop;
    let rowHeight = event.target.padding;
    console.log("scrollTop: " + this.scrollTop + " rowHeight: " + rowHeight);
    // let limit = tracker.scrollHeight - tracker.clientHeight;
    // console.log(event.target.scrollTop, limit);
    this.updateDisplayList();
  }

  onSelected(item) {
    this.currentItem = item;
  }

}
