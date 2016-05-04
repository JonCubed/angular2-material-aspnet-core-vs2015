import {Component} from '@angular/core';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';

@Component({
    selector: 'button-demo',
    templateUrl: 'app/button/button-demo.html',
    styleUrls: ['app/button/button-demo.css'],
    directives: [MdButton, MdAnchor, MdIcon]
})
export class ButtonDemo {
    isDisabled: boolean = false;
    clickCounter: number = 0;
}