function writeCards(names, event){
    const messages = []
    for(let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        // return(`Thank you, ${names[i]}, for the wonderful birthday gift!`)
        // console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`)
    }
    return messages
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num = num-1
    }
}