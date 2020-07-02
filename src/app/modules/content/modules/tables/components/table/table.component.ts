import { Component, Input, OnInit } from '@angular/core';
import { TableField } from './table.models';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    @Input() header: Array<TableField>;
    @Input() body: Array<Array<TableField>>;
    @Input() class = '';

    ngOnInit() {
    }
}