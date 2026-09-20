function titleCaseSentence(str) {
    // TODO: Implement this function
    let words = str.split(" ");
    let output = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word === "") continue;

        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

        if (output !== "") {
            output += " ";
        }
        output += newWord;
    }

    return output;
}