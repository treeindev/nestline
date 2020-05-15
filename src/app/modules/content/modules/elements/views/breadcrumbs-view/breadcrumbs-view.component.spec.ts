import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsViewComponent } from './breadcrumbs-view.component';

describe('BreadcrumbsViewComponent', () => {
    let component: BreadcrumbsViewComponent;
    let fixture: ComponentFixture<BreadcrumbsViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BreadcrumbsViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumbsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
