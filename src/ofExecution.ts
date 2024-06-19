{
    const sendEmail = (name: string) => {
        const email = createEmail()
        email.setRecipient("foo@example.comp")
        email.setSender("me@mydomain.com")
        email.send()
        email.setSubject("Hello World")
    }

    const createEmail: () => any = () => { }
}



