{
    let sharedMessages;

    const sharedMessagesSingleton = () => {
        if (sharedMessages !== undefined) {
            return sharedMessages;
        }

        sharedMessages = [];
        return sharedMessages;
    }

    const shareMessage = () => {
        const item = "important message"
        sharedMessagesSingleton().push(item)
    }

    const receiveMessage = () => {
        console.log(sharedMessagesSingleton().pop())
    }
}

