import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMessagesViewComponent } from './alert-messages-view.component';

describe('AlertMessagesViewComponent', () => {
    let component: AlertMessagesViewComponent;
    let fixture: ComponentFixture<AlertMessagesViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlertMessagesViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertMessagesViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
