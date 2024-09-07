let main = document.getElementById("main");
let player1Score = document.getElementById("player1-score");
let player2Score = document.getElementById("player2-score");
let switchPlayerBtn = document.getElementById("switch-player");

let arr = [
    "https://i.pinimg.com/originals/3f/72/2e/3f722e7be5a952584063a35048820e89.png",
    "https://i.pinimg.com/originals/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.png",
    "https://i.pinimg.com/originals/a4/a9/fc/a4a9fc5592aa7396ef2db7d6c7db2807.png",
    "https://i.pinimg.com/originals/44/0c/a9/440ca9f70eb5d6f3c7b1891c0ce922b2.jpg",
    "https://i.pinimg.com/originals/c3/9d/f1/c39df1e23ef1a98bea3ccba6fe173831.png"
];

let currentPlayer = 1;
let player1Points = 0;
let player2Points = 0;

// Function to render cards
function renderCards() {
    let s = "";
    let cardIndices = [];

    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        cardIndices.push(randomIndex); // Save the index to compare later
        s += `<div class="card"> <img src=${arr[randomIndex]} ></div>`;
    }
    main.innerHTML = s;

    // Check if both cards are the same
    if (cardIndices[0] === cardIndices[1]) {
        if (currentPlayer === 1) {
            player1Points++;
            player1Score.innerText = player1Points;
        } else {
            player2Points++;
            player2Score.innerText = player2Points;
        }
    }
}

// Button to switch between players and render new cards
switchPlayerBtn.addEventListener("click", function () {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    switchPlayerBtn.innerText = `(Current: Player ${currentPlayer})`;
    renderCards();
});

// Initial render
renderCards();
