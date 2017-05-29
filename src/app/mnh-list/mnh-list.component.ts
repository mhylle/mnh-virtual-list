// import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, ViewChild} from "@angular/core";
//
// @Component({
//   selector: 'mnh-list',
//   templateUrl: './mnh-list.component.html',
//   styleUrls: ['./mnh-list.component.scss']
// })
// export class MnhListComponent implements OnInit {
//
//   @Input()
//   items: any[] = [];
//
//   @Output()
//   update: EventEmitter<any[]> = new EventEmitter<any[]>();
//
//   @Output()
//   // change: EventEmitter<ChangeEvent> = new EventEmitter<ChangeEvent>();
//
//   @ViewChild('content', {read: ElementRef})
//   protected contentElementRef: ElementRef;
//
//   protected scrollHeight: number;
//   protected topPadding: number;
//
//   constructor(protected element: ElementRef, protected renderer: Renderer) {
//   }
//
//   ngOnInit() {
//     this.renderer.listen(this.element.nativeElement, 'scroll', this.refresh.bind(this))
//   }
//
//   refresh() {
//     requestAnimationFrame(this.calculateItems.bind(this));
//   }
//
//   private calculateDimensions() {
//     let el = this.element.nativeElement;
//     let content = this.contentElementRef.nativeElement;
//
//     let items = this.items || [];
//     let itemCount = items.length;
//     // let viewWidth = el.clientWidth - this.scrollbarWidth;
//     // let viewHeight = el.clientHeight - this.scrollbarHeight;
//
//     let contentDimensions;
//     // if (this.childWidth == undefined || this.childheight == undefined) {
//       contentDimensions = content.children[0] ? content.children[0].getBoundingClientRect() : {
//         // width: viewWidth,
//         // height: viewHeight
//       };
//     }
//
//     // let childWidth = this.childWidth || contentDimensions.width;
//     // let childHeight = this.childHeight || contentDimensions.height;
//
//     // let itemsPerRow = Math.max(1, Math.floor(viewWidth / viewHeight));
//
//     return {
//       itemCount: itemCount,
//       viewWidth: viewWidth,
//       viewHeight: viewHeight,
//       childWidth: childWidth,
//       childHeight: childHeight,
//       itemsPerRow: itemsPerRow
//     }
//   }
//
//   private calculateItems() {
//     let d = this.calculateDimensions();
//
//     let start = Math.floor(this.scrollTop)
//   }
//
//
// }
