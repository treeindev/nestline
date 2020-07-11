import { Component, OnInit, Input } from '@angular/core';

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

    constructor() { }

    ngOnInit() {
    }

}
