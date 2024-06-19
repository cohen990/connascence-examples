{
    const sytemA = {
        async processSale(saleId) {
            this.storeSale(saleId)
            this.notifyOfSale(saleId)
        },

        async storeSale(saleId) {
            db.storeSale(saleId)
        },

        async notifyOfSale(saleId) {
            systemB.getNotified(saleId)
        },

        async getSale(saleId) {
            return db.getSale(saleId)
        },
    }

    const sytemB = {
        getNotified: async (saleId) => {
            await systemA.getSale(saleId)
        }
    }

    const db = {} as any
    const systemB = {} as any
    const systemA = {} as any
}