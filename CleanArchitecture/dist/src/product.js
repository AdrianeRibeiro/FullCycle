"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    set cost(cost) {
        if (cost < 0) {
            throw new Error("Cost cannot be negative");
        }
        this._cost = cost;
    }
    get cost() {
        return this._cost;
    }
    get salesPrice() {
        return this._cost * 3;
    }
}
exports.default = Product;
//# sourceMappingURL=product.js.map