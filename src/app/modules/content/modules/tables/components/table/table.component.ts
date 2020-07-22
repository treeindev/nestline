import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TableField, TableEvent } from './table.models';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    @Input() header: Array<TableField> = [];
    @Input() body: Array<Array<TableField>> = [];
    @Input() class = '';
    @Input() contentClass = '';
    @Input() defaultText = 'No data available';
    @Input() editable = false;
    @Input() allowOrdering = false;
    @Input() editableHeader = 'Edit';

    @Output() onEdit = new EventEmitter<TableEvent>();
    @Output() onRemove = new EventEmitter<TableEvent>();

    private ascendingOrder = false;

    ngOnInit() {
        // Create new instances of the received objects to ensure independence between objects.
        this.header = [...this.header];
        this.body = [...this.body];
    }

    /**
     * Orders all rows of a table based on a given column.
     * The ordering sequence (ascendingOrder) is been altered at the end of each execution.
     * 
     * @param index - index of the column to order.
     */
    protected order( index: number ): void {
        if ( !this.allowOrdering ) { return }
        
        this.body.sort( (a,b) => {
            const left = this.ascendingOrder ? b[index].value : a[index].value;
            const right = this.ascendingOrder ? a[index].value : b[index].value;

            if ( typeof left === "number" && typeof right === "number" ) { return left - right }
            if ( typeof left === "string" && typeof right === "string" ) { return left.toUpperCase() < right.toUpperCase() ? -1 : 1 }
            
            return 0;
        });

        this.ascendingOrder = !this.ascendingOrder;
    }

    /**
     * Emits new EDIT event when user clicks
     */
    protected edit( field:Array<TableField>, index: number ) {
        this.onEdit.emit( { field:field, index: index } );
    }

    /**
     * Emits new REMOVE event when user clicks
     */
    protected remove( field:Array<TableField>, index: number ) {
        this.onRemove.emit( { field:field, index: index } );
    }
}