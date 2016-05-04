import {Component, ViewEncapsulation} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    selector: 'md-icon-demo',
    templateUrl: 'app/icon/icon-demo.html',
    styleUrls: ['app/icon/icon-demo.css'],
    directives: [MdIcon],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
})
export class IconDemo {
    constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('thumb-up', '/app/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/app/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
}