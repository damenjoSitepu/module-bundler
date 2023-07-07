export class SumToNNumber {
    number = 0;
    total = 0;

    constructor(number = 0) {
        this.number = number;
    }

    create() {
        this.total = (this.number * (this.number + 1)) / 2;
        return this;
    }

    get() {
        return this.total;
    }
}