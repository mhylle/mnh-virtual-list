import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dp: any[] = [];

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.dp.push({index: i, label: "label " + i, value: "value: " + i});
    }
  }
}
