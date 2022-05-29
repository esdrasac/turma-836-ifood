const stack = []

const producer = () => {
    const item = Math.ceil(Math.random() * 100)
    stack.push(item)
    console.log('Stack length:', stack.length)
    console.log('Stack:', stack)
    console.log('===============Producer================')

    setTimeout(producer, Math.ceil(Math.random() * 3000))
}


const consumer = () => {
    if(stack.length === 0) {
        console.log('Empty stack')
    } else {
        const item = stack.pop()
        console.log('Consumed item:', item)
    }

    console.log('================Consumer================')
    setTimeout(consumer, Math.ceil(Math.random() * 3000))
}


producer()
consumer()