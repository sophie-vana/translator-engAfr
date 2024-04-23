// create new map and set key-value pairs

let translateMap = new Map();
// set the english word as the key and the afrikaans word as the value
translateMap.set("peanut", "grondboontjie")
translateMap.set("dog", "hond")
translateMap.set("name", "naam")
translateMap.set("bathroom", "badkamer")
translateMap.set("coffee", "koffee")
translateMap.set("shoes", "skoene")
translateMap.set("boy", "seun")
translateMap.set("girl", "meisie")
translateMap.set("read", "lees")
translateMap.set("cellphone", "selfoon")

// ensure function only runs when user clicks the translate button
document.getElementById("translate-btn").addEventListener("click", function(event){
    event.preventDefault;
    mapCheck();
})

// create function to compare user input against map keys
function mapCheck(){

let word = document.getElementById("word-input").value.trim().toLowerCase(); // read input and ensure user input style consistency

// if statement to check if user input matches any of the map keys
if (translateMap.has(word)) {
    // get the corresponding value for the key that matches user input
    let translatedWord = translateMap.get(word);
    document.getElementById("translated-word").textContent = `You selected the word: ${word}. The Afrikaans word for ${word} is: ${translatedWord}.`
} else {
    // inform user if word is not found
    document.getElementById("translated-word").textContent = `The word ${word} is not on the list. Please select a word from the list above.`
}

}