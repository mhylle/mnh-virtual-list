# MnhVirtualList

This project is an attempt to make a virtual list component that can be used to do almost infinite scroll.

API:

<hi-list [data]="items" [headers]="headers" [orientation]="vertical" [cell-classes]="[cell1,cell2]" [use-data-label]="true></hi-list>

data: array of items to be shown - required - 
 can be json data in the array which will then be divided into columns
headers: optional
orientation: vertical | horizontal - optional defaults to horizontal
cell-classes: array of classes - optional - defaults to empty - classes to be used for the individual cells, if only 1 is specified it will be used for all cells.

use-data-label: true | false - optional- defaults to false. if data was an array of json data use the name of the cell as a label for the cell. (if set to true)










Some of it is based off the tutorial at [Two fucking developers (cached version)](http://webcache.googleusercontent.com/search?q=cache:qw-WJyd40rEJ:twofuckingdevelopers.com/2014/11/angularjs-virtual-list-directive-tutorial/+&cd=1&hl=en&ct=clnk&gl=dk)


The base of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
