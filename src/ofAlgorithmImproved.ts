{
    const sharedValidation = (name: string) => {
        if (name !== "") {
            return false
        }
        return true
    }

    const validateInput = (name: string) => {
        sharedValidation(name)
    }

    const validateInputButOnTheFrontend = (name: string) => {
        sharedValidation(name)
    }
}



