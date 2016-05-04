import {bootstrap} from '@angular/platform-browser-dynamic';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {DemoApp} from './demo-app';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {MdIconRegistry} from '@angular2-material/icon';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {provide} from '@angular/core';
import {createOverlayContainer, OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {Renderer} from '@angular/core';
//import {MdGestureConfig} from './core/gestures/MdGestureConfig';
import 'rxjs/Rx';

bootstrap(DemoApp, [
    ROUTER_PROVIDERS,
    MdLiveAnnouncer,
    provide(OVERLAY_CONTAINER_TOKEN, { useValue: createOverlayContainer() }),
    HTTP_PROVIDERS,
    MdIconRegistry,
    Renderer,
    //provide(HAMMER_GESTURE_CONFIG, { useClass: MdGestureConfig })
]);