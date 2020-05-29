import { Component, OnInit, ViewChildren, Renderer2 } from '@angular/core';
import { NavigationItem } from './navigation-item.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @ViewChildren('childrenMenu') childrenMenu;

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
                        link: 'typography',
                        active: true
                    },
                    {
                        name: 'Colours',
                        link: 'colours'
                    }
                ]
            },
            {
                name: 'Elements',
                icon: 'ion-md-cube',
                expanded: false,
                children: [
                    {
                        name: 'Buttons',
                        link: 'buttons'
                    },
                    {
                        name: 'Tooltips',
                        link: 'tolltips'
                    },
                    {
                        name: 'Breadcrumbs',
                        link: 'breadcrumbs'
                    },
                    {
                        name: 'Alert Messages',
                        link: 'alert-messages'
                    },
                    {
                        name: 'Loaders',
                        link: 'loaders'
                    }
                    
                ]
            },
            {
                name: 'Forms',
                icon: 'ion-md-clipboard'
            },
            {
                name: 'Tables',
                icon: 'ion-md-grid'
            },
            {
                name: 'Layout',
                icon: 'ion-ios-apps',
                expanded: false,
                children: [
                    {
                        name: 'Cards',
                        link: 'cards'
                    },
                    {
                        name: 'Galleries',
                        link: 'galleries'
                    },
                    {
                        name: 'Grids',
                        link: 'grids'
                    }
                ]
            },
            {
                name: 'Modals',
                icon: 'ion-ios-chatboxes'
            },
            {
                name: 'Analytics',
                icon: 'ion-ios-stats'
            },
            {
                name: 'Views',
                icon: 'ion-md-eye'
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
        // switch between expandable state and prevent navigation.
        if ( item.children && item.children.length > 0 ) {
            const children = this.childrenMenu.toArray()[ index ].nativeElement;
            item.expanded ? this.collapseChildrenMenu( item, children ) : this.expandChildrenMenu( item, children );
            return;
        }
    }

    /**
     * Collapses a children menu.
     */
    private collapseChildrenMenu( item: NavigationItem, children ) {
        // The max-height is added programatically in order to enforce CSS animation.
        this.renderer.setStyle( children, 'max-height', '100vh' );
        
        // Time out is used to force javascript to render element with previous height,
        // and then rerender the element with new height styling.
        setTimeout( () => {
            this.renderer.setStyle( children, 'max-height', '0' );
            this.renderer.setStyle( children, 'margin-top', '-20px' );

            // Wait for CSS animation to complete and then hide sub menu.
            setTimeout( () => {
                item.expanded = false;
            }, 500 );
        }, 1 );
    }

    /**
     * Expands a children menu.
     */
    private expandChildrenMenu( item: NavigationItem, children ) {
        item.expanded = true;
        this.renderer.setStyle( children, 'max-height', '0vh' );

        // Wait for CSS class change and then force the CSS animation.
        setTimeout( () => {
            this.renderer.setStyle( children, 'max-height', '100vh' );
            this.renderer.setStyle( children, 'margin-top', '0px' );
        }, 1 );
    }

}
