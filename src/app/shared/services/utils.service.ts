import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    /**
     * Validates if provided address has valid e-mail format.
     * @param email - E-mail address as string.
     */
    public isvalidEmail( email: string ): boolean {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    return regex.test( email );
    }
}