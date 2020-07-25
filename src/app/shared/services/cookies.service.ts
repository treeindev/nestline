import { Injectable } from '@angular/core';

@Injectable()
export class CookiesService {

    /**
     * Creates a cookie for given name and value.
     * Default lifetime is 1 year.
     */
    public createCookie( name: string, value: any, days:number = 1 * 365 ) {
        var expires = "";

        if ( days ) {
            var date = new Date();
            date.setTime( date.getTime() + (days*24*60*60*1000) );
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    /**
     * Retreives a cookie by a given name
     */
    public readCookie( name ): string {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for ( var i = 0; i < ca.length; i++ ) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }

        return null;
    }

    /**
     * Erases a cookie by a given name
     */
    public eraseCookie( name ) {
        this.createCookie( name, "", -1 );
    }
}