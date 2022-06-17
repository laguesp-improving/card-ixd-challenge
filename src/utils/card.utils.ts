export const cardBrands = {
  amex: {
    color: "#094D92",
    name: "American Express",
    id: "amex",
    securityCodeLength: 4,
    cardNumberLength: 15
  },
  visa: {
    color: "#14BDEB",
    name: "American Express",
    id: "amex",
    securityCodeLength: 3,
    cardNumberLength: 16
  },
  mastercard: {
    color: "#fffdf7",
    name: "American Express",
    id: "amex",
    securityCodeLength: 3,
    cardNumberLength: 16
  }
};

export const supportedCards = {
  4040: cardBrands.visa,
  4242: cardBrands.visa,
  2223: cardBrands.mastercard,
  5555: cardBrands.mastercard,
  3782: cardBrands.amex,
  3714: cardBrands.amex
};
