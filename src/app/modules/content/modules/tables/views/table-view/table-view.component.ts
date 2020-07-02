import { Component, OnInit } from '@angular/core';
import { TableField } from '../../components/table/table.models';

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
    example1header: Array<TableField> = [
        {
            value: 'id',
            class: 'w-10'
        },
        {
            value: 'first name',
            class: 'w-20'
        },
        {
            value: 'last name',
            class: 'w-20'
        },
        {
            value: 'username',
            class: 'w-20'
        },
        {
            value: 'date',
            class: 'w-30'
        }
    ];
    example1body: Array<Array<TableField>> = [
        [
            {
                value: '1',
                class: 'w-10'
            },
            {
                value: 'Dillon',
                class: 'w-20'
            },
            {
                value: 'Cote',
                class: 'w-20'
            },
            {
                value: 'username2019',
                class: 'w-20'
            },
            {
                value: '01-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: '1',
                class: 'w-10'
            },
            {
                value: 'Dillon',
                class: 'w-20'
            },
            {
                value: 'Cote',
                class: 'w-20'
            },
            {
                value: 'username2019',
                class: 'w-20'
            },
            {
                value: '01-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: '1',
                class: 'w-10'
            },
            {
                value: 'Dillon',
                class: 'w-20'
            },
            {
                value: 'Cote',
                class: 'w-20'
            },
            {
                value: 'username2019',
                class: 'w-20'
            },
            {
                value: '01-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: '1',
                class: 'w-10'
            },
            {
                value: 'Dillon',
                class: 'w-20'
            },
            {
                value: 'Cote',
                class: 'w-20'
            },
            {
                value: 'username2019',
                class: 'w-20'
            },
            {
                value: '01-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: '1',
                class: 'w-10'
            },
            {
                value: 'Dillon',
                class: 'w-20'
            },
            {
                value: 'Cote',
                class: 'w-20'
            },
            {
                value: 'username2019',
                class: 'w-20'
            },
            {
                value: '01-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ]
    ];

    constructor() { }

    ngOnInit() {
    }

}
