export function sum(x: number, y: number) {
    return x + y;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.','')
            .replace(',',''));
}