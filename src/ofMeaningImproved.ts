{
    const paymentSuccess = 0
    const paymentFailure = 1

    const completePayment = async (payment) => {
        const result = await doPayment(payment)
        if (result.statusCode == 200) {
            return { PaymentStatus: paymentSuccess }
        }
        return { PaymentStatus: paymentFailure }
    }

    const publishPaymentEvent = (paymentStatus: number) => {
        if (paymentStatus == paymentFailure) {
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