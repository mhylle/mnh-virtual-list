import {Component, HostListener, OnInit} from "@angular/core";

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

    for (let i = 0; i < this.visibleProvider.length; i++) {
      let topPos = ((firstCell + i) * this.rowHeight);
      this.visibleProvider[i].styles = {
        'top': topPos + "px;",
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
    console.log("scrollTop: " + this.scrollTop);
    // let limit = tracker.scrollHeight - tracker.clientHeight;
    // console.log(event.target.scrollTop, limit);
    this.updateDisplayList();
  }

  onClickOption() {

  }

}
