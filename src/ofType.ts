type Price = {
    currency: string
    amount: number
}

const addPrices: (first: Price, second: Price)
    => Price = (first: Price, second: Price) => {
        if (first.currency != second.currency) {
            throw new Error("Can't do it omg what are you crazy?")
        }

        return {
            currency: first.currency,
            amount: first.amount + second.amount
        }
    }