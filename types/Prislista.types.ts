export interface PrislistaStatus {
    value: "available" | "reserved" | "sold";
    label: string;
    order: number;
}

export interface PrislistaRow {
    id: string;
    name: string;
    status: PrislistaStatus;
    type: string;
    rooms: string;
    livingArea: string;
    otherArea: string;
    price: string;
    fee: string;
    factSheetUrl: string;
    interestUrl: string;
}
