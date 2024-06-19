{
    const emailClient = {} as any

    const sendEmail = (name: string) => {
        const email = createEmail()
            .setRecipient("foo@example.comp")
            .setSender("me@mydomain.com")
            .setSubject("Hello World")
            .send()
    }

    const sendEmailBroken = (name: string) => {
        const email = createEmail()
            .setRecipient("foo@example.comp")
            .setSender("me@mydomain.com")
            .send()
            .setSubject("Hello World")
    }

    const createEmail: () => WantsRecipient = () => {
        return new EmailBuilder()
    }

    class EmailBuilder implements
        WantsRecipient,
        WantsSender,
        WantsSubject,
        CanSend {

        private recipient: string
        private sender: string
        private subject: string

        setRecipient: (recipient: string) => WantsSender =
            (recipient: string) => {
                this.recipient = recipient;
                return this
            }
        setSender: (sender: string) => WantsSubject =
            (sender: string) => {
                this.sender = sender;
                return this
            }
        setSubject: (subject: string) => CanSend =
            (subject: string) => {
                this.subject = subject;
                return this
            }
        send = () => {
            emailClient.sendEmail(
                this.recipient,
                this.sender,
                this.subject)
        }
    }

    interface WantsRecipient {
        setRecipient: (recipient: string) => WantsSender
    }
    interface WantsSender {
        setSender: (sender: string) => WantsSubject
    }
    interface WantsSubject {
        setSubject: (subject: string) => CanSend
    }
    interface CanSend {
        send: () => void
    }
}



