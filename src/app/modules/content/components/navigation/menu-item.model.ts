export class MenuItem {
    /**
     * A reference to the ionicons icon class to use.
     */
    icon?: string;
    /**
     * The name that will be used on the menu.
     */
    name: string;
    /**
     * Children items for this item.
     */
    children?: Array<MenuItem>;
    /**
     * The destination link.
     */
    link?: string;
    /**
     * Point to an external url (absolute).
     */
    url?: string;
    /**
     * Target used on the link element.
     */
    target?: string;
    /**
     * Defines if item is active by default.
     */
    active?: boolean;
    /**
     * If menu contains children, controls if section is expanded.
     */
    expanded?: boolean;
}