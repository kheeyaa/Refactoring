export class Order {
  private _quantity: any;
  private _item: {
    name: string;
    price: number;
  };

  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const bestPricce = this._quantity * this._item.price;
    let discountFactor = 0.98;

    if (bestPricce > 1000) discountFactor -= 0.03;
    return bestPricce * discountFactor;
  }
}
