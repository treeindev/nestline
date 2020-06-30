import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
    selector: 'app-analytics-view',
    templateUrl: './analytics-view.component.html',
    styleUrls: ['./analytics-view.component.scss']
})
export class AnalyticsViewComponent implements OnInit {
    optionsBarCompareChart: any;
    optionsBarChart: any;
    optionsLineChart: any;

    constructor() { }

    ngOnInit() {
        const xAxisData = [];
        const data1 = [];
        const data2 = [];

        for (let i = 0; i < 100; i++) {
            xAxisData.push('category' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }

        this.optionsBarCompareChart = {
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false,
                }
            },
            yAxis: {},
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: (idx) => idx * 10
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: (idx) => idx * 10 + 100
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5
        };

        const dataAxis = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
        ];
        const data = [
            220,
            182,
            191,
            234,
            290,
            330,
            310,
            123,
            442,
            321,
            90,
            149,
            210,
            122,
            133,
            334,
            198,
            123,
            125,
            220,
        ];
        const yMax = 500;
        const dataShadow = [];

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        this.optionsBarChart = {
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                z: 10,
            },
            yAxis: {
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#999',
                    },
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                },
            ],
            series: [
                {
                    // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' },
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false,
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' },
                            ]),
                        },
                        emphasis: {
                            color: new graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' },
                            ]),
                        },
                    },
                    data,
                },
            ],
        };

        this.optionsLineChart = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'X-1',
                    type: 'line',
                    stack: 'counts',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'X-2',
                    type: 'line',
                    stack: 'counts',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'X-3',
                    type: 'line',
                    stack: 'counts',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'X-4',
                    type: 'line',
                    stack: 'counts',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'X-5',
                    type: 'line',
                    stack: 'counts',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    }
}
