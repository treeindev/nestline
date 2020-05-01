import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public settingsVisible = false;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Changes visibility of the settings dropdown.
     */
    public toggleSettings(): void {
        this.settingsVisible = !this.settingsVisible;
    }

}
