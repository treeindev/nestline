import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    protected items: Array<MenuItem>;

    constructor() {
        this.items = [
            {
                name: 'Basics',
                icon: 'ion-md-desktop',
                active: true,
                expanded: true,
                children: [
                    {
                        name: 'Typography',
                    },
                    {
                        name: 'Colours',
                    }
                ]
            },
            {
                name: 'Elements'
            },
            {
                name: 'Forms'
            },
            {
                name: 'Tables'
            },
            {
                name: 'Layout',
                icon: 'ion-ios-apps'
            },
            {
                name: 'Modals'
            },
            {
                name: 'Analytics',
                icon: 'ion-ios-stats'
            },
            {
                name: 'Views'
            }
        ]
    }

    ngOnInit() {
    }

}
