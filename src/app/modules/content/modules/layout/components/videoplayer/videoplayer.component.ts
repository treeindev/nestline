import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video, AvailableVideoServices } from './videoplayer.model';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-videoplayer',
    templateUrl: './videoplayer.component.html',
    styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
    @Input() aspectRatio = 9/16;
    @Input() width = 50;
    @Input() border: string;
    @Input() borderRadius = 10;
    @Input() video: Video;

    public source: SafeResourceUrl;
    public ready = false;
    public videoServices = AvailableVideoServices;
    public size: Array<number>;

    constructor( private sanitizer: DomSanitizer, private utils: UtilsService ) { }

    ngOnInit() {
        this.source = this.sanitizer.bypassSecurityTrustResourceUrl( this.generateSource() );
        this.generateSize();
        this.ready = true;
        this.utils.getWindowResizeObservable().subscribe( e => this.generateSize() );
    }

    /**
     * Generated the iframe's "src" property.
     */
    private generateSource(): string {
        if ( !this.video ) { return; }
        switch (this.video.service) {
            case AvailableVideoServices.VIMEO:
                return this.generateVimeoSource();

            case AvailableVideoServices.YOUTUBE:
                return this.generateYoutubeSource();

            default:
                return;
        }
    }

    /**
     * Generate Vimeo iframe.
     */
    private generateVimeoSource(): string {
        return `https://player.vimeo.com/video/${this.video.source}`;
    }
    
    /**
     * Generate Youtube iframe.
     */
    private generateYoutubeSource(): string {
        return `https://www.youtube.com/embed/${this.video.source}`;
    }

    /**
     * Generates the size of the iframe based on:
     * width in percentage.
     * aspect ratio.
     * window size
     */
    private generateSize(): void {
        if ( !this.width || !this.aspectRatio ) { return; }
        
        const windowSize = window.innerWidth;
        const height = ( windowSize * this.width / 100 ) * this.aspectRatio;
        const width = windowSize * this.width / 100;
        
        this.size = [ width, height ];
    }

}