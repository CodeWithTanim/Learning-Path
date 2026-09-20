function countWordFrequencies(sentence) {
    // TODO: Implement this function
    sentence = sentence.toLowerCase();

    let words = [];
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];
        let isAlphaNum = (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');

        if (isAlphaNum) {
            currentWord += ch;
        } else {
            if (currentWord !== "") {
                words.push(currentWord);
                currentWord = "";
            }
        }
    }
    if (currentWord !== "") {
        words.push(currentWord);
    }

    let freq = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (freq[word] === undefined) {
            freq[word] = 1;
        } else {
            freq[word] = freq[word] + 1;
        }
    }

    return freq;
}