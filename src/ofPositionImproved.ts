{
    type Name = {
        firstname: string,
        lastname: string,
        title: string
    }

    type Greeting = {
        greetableName: string
        greetingMessage: string
    }

    const greetingMaker: (name: Name) => Greeting = (name: Name) => {
        const greetableName = `${name.title} ${name.firstname} ${name.lastname}`

        const greetingMessage = randomFrom("Hi there,", "Oh hi,")

        return { greetableName, greetingMessage }
    }

    const greeter = () => {
        const name = { firstname: "Samantha", lastname: "Cohen", title: "Ms" }
        const { greetableName, greetingMessage } = greetingMaker(name)
        console.log(`${greetingMessage} ${greetableName}`)
    }

    const randomFrom: (...thing: string[]) => string = (...thing) => { throw "oops" }
}



