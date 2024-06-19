{
    const greetingMaker = (
        firstname: string,
        lastname: string,
        title: string) => {
        const name = `${title} ${firstname} ${lastname}`

        const greeting = randomFrom("Hi there!", "Oh Hi, ")

        return [name, greeting]
    }

    const greeter = () => {
        const [name, greeting] = greetingMaker("Samantha", "Cohen", "Ms")
        console.log(`${greeting} ${name}`)
    }

    const randomFrom = (...thing) => { }
}




