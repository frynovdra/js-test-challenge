let repeatString = (text, times) => {

    namber = typeof times;
    setring = typeof text;
    texts = [];

    if(namber == 'number' && setring == 'string'){
        for (let i = 0; i < times; i++){
        texts.push(text);
        }
        return texts.join(" ");
    } else {
        return 'Error, input yang benar!';
    }
}

module.exports = repeatString;