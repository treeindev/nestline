import { Component, OnInit } from '@angular/core';
import { Video, AvailableVideoServices } from '../../components/videoplayer/videoplayer.model';

@Component({
    selector: 'app-galleries',
    templateUrl: './galleries.component.html',
    styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
    vimeoSample: Video;

    constructor() { }

    ngOnInit() {
        this.vimeoSample = {
            source: '54511177',
            service: AvailableVideoServices.VIMEO
        }
    }
}
