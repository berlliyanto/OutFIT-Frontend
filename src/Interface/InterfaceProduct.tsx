export interface PreviewProductInterface {
    code: string;
    categoryName: string;
    images: [] | any;
    name: string;
    price: {
        formattedValue: string;
        currencyIso: string;
        value: number;
    };
}