import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() prev: string = "Previous";
    @Input() next: string = "Next";
    @Input() pages: number = 1;
    @Input() active: number = 1;
    @Input() class: string = '';

    @Output() switch = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    /**
     * Trigger event when user clickes on pagination
     */
    onSwitch( destination: number ) {
        this.active = destination;
        this.switch.emit( destination );
    }

}
