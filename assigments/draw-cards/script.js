/* The program shuffles a deck of cards and draws five cards, when I press a button, it prints five cards. */

document.getElementById("drawButton").addEventListener("click", function () {
    var deck = createDeck();
    shuffle(deck);
    var drawnCards = drawCards(deck, 5);
    displayCards(drawnCards);
});

function createDeck() {
    var suits = ["S", "H", "D", "C"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            deck.push(suits[i] + values[j]);
        }
    }
    return deck;
}

function shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function drawCards(deck, num) {
    return deck.slice(0, num);
}

function displayCards(cards) {
    var cardText = "";
    for (var i = 0; i < cards.length; i++) {
        cardText += convertCard(cards[i]) + "<br>";
    }
    document.getElementById("cardDisplay").innerHTML = cardText;
}

function convertCard(card) {
    var suitSymbol = "";
    var suit = card.charAt(0);
    var value = card.slice(1);

    switch (suit) {
        case "S":
            suitSymbol = "♠";
            break;
        case "H":
            suitSymbol = "♥";
            break;
        case "D":
            suitSymbol = "♦";
            break;
        case "C":
            suitSymbol = "♣";
            break;
    }

    return suitSymbol + value;
}
