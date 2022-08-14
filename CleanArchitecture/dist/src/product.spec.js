"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
describe("products unit test", () => {
    it("should have a name", () => {
        const product = new product_1.default("Produto 1");
        expect(product.name).toBe("Produto 1");
    });
    it("should throw an error if cost is negative", () => {
        const product = new product_1.default("Produto 1");
        expect(() => {
            product.cost = -1;
        }).toThrow("Cost cannot be negative");
    });
    it("should set the cost of a product", () => {
        const product = new product_1.default("Produto 1");
        product.cost = 100;
        expect(product.cost).toBe(100);
    });
    it("should set the salesPrice by 3 times the cost of the product", () => {
        const product = new product_1.default("Produto 1");
        product.cost = 100;
        expect(product.salesPrice).toBe(300);
    });
});
//# sourceMappingURL=product.spec.js.map