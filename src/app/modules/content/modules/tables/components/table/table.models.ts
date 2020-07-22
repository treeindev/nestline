export interface TableField {
    value: string | number;
    class: string;
}

export interface TableEvent {
    index: number;
    field: Array<TableField>;
}