export enum AvailableVideoServices {
    YOUTUBE,
    VIMEO
}

export interface Video {
    source: string;
    service: AvailableVideoServices;
    allowAutoplay?: string;
    allowFullScreen?: string;
}