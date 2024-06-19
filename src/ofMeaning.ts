{
    const completePayment = async (payment) => {
        const result = await doPayment(payment)
        if (result.statusCode == 200) {
            return { PaymentStatus: 0 }
        }
        return { PaymentStatus: 1 }
    }

    const publishPaymentEvent = (paymentStatus: number) => {
        if (paymentStatus == 1) {
            publishPaymentFailed()
            return;
        }
        publishPaymentSuccess()
    }


    // placeholder function to make compiler stop complaining
    const doPayment: (thing: any) => { statusCode: number } = (_) => { throw "oops" }
    const publishPaymentFailed = () => () => { }
    const publishPaymentSuccess = () => () => { }
}