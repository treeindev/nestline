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
                value: 19,
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
                value: 21,
                class: 'w-10'
            },
            {
                value: 'Mike',
                class: 'w-20'
            },
            {
                value: 'Spark',
                class: 'w-20'
            },
            {
                value: 'username2020',
                class: 'w-20'
            },
            {
                value: '10-03-2019 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: 3,
                class: 'w-10'
            },
            {
                value: 'John',
                class: 'w-20'
            },
            {
                value: 'William',
                class: 'w-20'
            },
            {
                value: 'codesignal',
                class: 'w-20'
            },
            {
                value: '01-03-2009 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: 10,
                class: 'w-10'
            },
            {
                value: 'Carbon',
                class: 'w-20'
            },
            {
                value: 'Box',
                class: 'w-20'
            },
            {
                value: 'slider10',
                class: 'w-20'
            },
            {
                value: '01-03-1989 - 09:10:25',
                class: 'w-30'
            }
        ],
        [
            {
                value: 15,
                class: 'w-10'
            },
            {
                value: 'Montserrat',
                class: 'w-20'
            },
            {
                value: 'Blue',
                class: 'w-20'
            },
            {
                value: 'username2009',
                class: 'w-20'
            },
            {
                value: '01-01-2050 - 09:10:25',
                class: 'w-30'
            }
        ]
    ];

    constructor() { }

    ngOnInit() {
    }

}
