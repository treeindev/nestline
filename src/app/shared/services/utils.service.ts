import { Injectable } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class UtilsService {
    private windowResize: Subject<any> = new Subject();

    constructor() {
        this.setEvents();
    }

    /**
     * Validates if provided address has valid e-mail format.
     * @param email - E-mail address as string.
     */
    public isvalidEmail( email: string ): boolean {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    return regex.test( email );
    }

    /**
     * Returns an observable which is going to be triggered when user resizes screen.
     */
    public getWindowResizeObservable(): Observable<any> {
        return this.windowResize.asObservable();
    }

    /**
     * Sets the event listeners and observables for this service.
     */
    private setEvents() {
        fromEvent( window, 'resize' )
            .pipe( debounceTime(300) )
            .subscribe( (event) => {
                this.windowResize.next( event );
            });
    }
}