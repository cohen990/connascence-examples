{
    const shareMessage = (sharedMessages) => {
        const item = "important message"
        sharedMessages.push(item)
    }

    const receiveMessage = (sharedMessages) => {
        console.log(sharedMessages.pop())
    }
}
