import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-view',
    templateUrl: './form-view.component.html',
    styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
    public quillConfig = {
        toolbar: [
            ['bold', 'italic', 'underline']
        ]
    }

    constructor() { }

    ngOnInit() {
    }

}
