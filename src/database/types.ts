export interface MarketItem {
  productId: string;
  name: string;
  price: number;
  discountId: number | null;
  discountPrice: number | null;
  prizeAmount: number;
  prizeType: string;
  currencyId: string;
  tags: number[];
}

export interface Discounts {
  percent: number;
  end_date: string;
}

export interface Description {
  descr: string;
  name: string;
}

export interface Currencie {
  symbol: string;
  name: string;
  code: string;
}

export type Currencies = Record<string, Currencie>;
