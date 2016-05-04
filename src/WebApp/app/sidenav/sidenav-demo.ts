import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
    selector: 'sidenav-demo',
    templateUrl: 'app/sidenav/sidenav-demo.html',
    styleUrls: ['app/sidenav/sidenav-demo.css'],
    directives: [MD_SIDENAV_DIRECTIVES, MdButton]
})
export class SidenavDemo { }