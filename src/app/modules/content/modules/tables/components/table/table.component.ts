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
    @Input() contentClass = '';
    @Input() defaultText = 'No data available';
    @Input() editable = false;
    @Input() allowOrdering = false;
    @Input() editableHeader = 'Edit';

    ngOnInit() {
        this.body = [...this.body];
    }

    protected order( index: number ): void {
        if ( !this.allowOrdering ) { return }
        
        this.body.sort( (a,b) => {
            const left = a[index].value;
            const right = b[index].value;

            if ( typeof left === "number" && typeof right === "number" ) { return left - right }
            if ( typeof left === "string" && typeof right === "string" ) { return left.toUpperCase() < right.toUpperCase() ? -1 : 1 }
            
            return 0;
        });
    }
}