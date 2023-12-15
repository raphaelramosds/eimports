export class Parser {
    static parseCurrencyFromForm(value: string) {
        return Number(value.trim().replace('R$', '').replace(',', '.').padEnd(2, '0'));
    }
}