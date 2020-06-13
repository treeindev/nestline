import { Component, OnInit, ViewChildren, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationItem } from './navigation-item.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @ViewChildren('childrenMenu') childrenMenu;

    protected items: Array<NavigationItem>;

    constructor( private renderer: Renderer2, private router: Router ) {
        this.items = [
            {
                name: 'Basics',
                icon: 'ion-md-desktop',
                active: true,
                expanded: true,
                children: [
                    {
                        name: 'Typography',
                        link: '/content/basics/typography',
                        active: true
                    },
                    {
                        name: 'Colours',
                        link: '/content/basics/colours'
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
                        link: '/content/elements/buttons'
                    },
                    {
                        name: 'Tooltips',
                        link: '/content/elements/tooltips'
                    },
                    {
                        name: 'Breadcrumbs',
                        link: '/content/elements/breadcrumbs'
                    },
                    {
                        name: 'Alert Messages',
                        link: '/content/elements/alert-messages'
                    },
                    {
                        name: 'Loaders',
                        link: '/content/elements/loaders'
                    }
                    
                ]
            },
            {
                name: 'Forms',
                icon: 'ion-md-clipboard',
                link: '/content/forms'
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
        this.updateMenuStatus();
    }

    /**
     * Handles the user navigation.  
     * @param item - the navigation item user has clicked on.
     */
    protected async navigate( item: NavigationItem, index: number ) {
        // If user has clicked on the parent of an expandable menu, 
        // switch between expandable state and prevent navigation.
        if ( item.children && item.children.length > 0 ) {
            const children = this.childrenMenu.toArray()[ index ].nativeElement;
            item.expanded ? this.collapseChildrenMenu( item, children ) : this.expandChildrenMenu( item, children );
            return;
        }

        // If user has clicked on a menu with no children, navigate to path.
        await this.router.navigate( [item.link] );
        this.updateMenuStatus();
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

    /**
     * Updates the status of the navigation menu.
     * Should be triggered after an internal navigation.
     */
    public updateMenuStatus() {
        const url = this.router.url;

        // Loop through all navigation items and set their active status.
        this.items.forEach( ( item ) => {
            let active = false;

            if ( item.link && item.link === url ) {
                item.active = true;
                return;
            }

            if ( !item.children ) {
                item.active = active;
                return;
            }

            item.children.forEach( ( child ) => {
                if ( child.link && child.link === url ) {
                    child.active = true;
                    active = true;
                } else {
                    child.active = false;
                }
            });

            item.active = active;
        });
    }

}
