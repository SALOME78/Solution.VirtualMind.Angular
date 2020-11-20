export interface CurrencyPurchaseModel{
    id: number;
    idUser: number;
    idDocument: number;
    document: string;
    idExchangeCurrency: number;
    exchangeCurrency: string;
    description: string;
    amount: number;
    exchangeRate: number;
    subTotal: number;
    createDate: Date;
    modifyDate: Date;
    isEnabled: boolean;
}
