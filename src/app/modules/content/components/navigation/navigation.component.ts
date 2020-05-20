import { Component, OnInit, ViewChildren, Renderer2 } from '@angular/core';
import { NavigationItem } from './navigation-item.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @ViewChildren('subMenu') subMenu;

    protected items: Array<NavigationItem>;

    constructor( private renderer: Renderer2 ) {
        this.items = [
            {
                name: 'Basics',
                icon: 'ion-md-desktop',
                active: true,
                expanded: true,
                children: [
                    {
                        name: 'Typography',
                        link: 'typography'
                    },
                    {
                        name: 'Colours',
                        link: 'colours'
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

    /**
     * Handles the user navigation.  
     * @param item - the navigation item user has clicked on.
     */
    protected navigate( item: NavigationItem, index: number ): void {
        // If user has clicked on the parent of a expandable menu, 
        // switch between expandable state. 
        if ( item.children && item.children.length > 0 ) {
            const subMenu = this.subMenu.toArray()[ index ].nativeElement;

            // The element has 20px padding that needs to be substract.
            const elementHeight = subMenu.offsetHeight - 20;
            this.renderer.setStyle( subMenu, 'height', elementHeight + 'px' );
            
            // Time out is used to force javascript to render element with previous height,
            // and then rerender the element with new height styling.
            setTimeout( () => {
                this.renderer.setStyle( subMenu, 'height', 0 );
                this.renderer.setStyle( subMenu, 'margin-top', '-20px' );
            }, 1 );

            return;
        }
    }

}
