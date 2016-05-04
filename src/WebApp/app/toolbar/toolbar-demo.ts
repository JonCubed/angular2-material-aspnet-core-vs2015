import {Component} from '@angular/core';
import {MdIcon} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'toolbar-demo',
    templateUrl: 'app/toolbar/toolbar-demo.html',
    styleUrls: ['app/toolbar/toolbar-demo.css'],
    directives: [MdToolbar, MdIcon]
})
export class ToolbarDemo {

}