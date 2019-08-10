var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      const parent = $(this).closest(".card"); // .card
      memoryGame.pickedCards.push(parent);
      $(this).toggleClass("back");
      $(this)
        .next()
        .toggleClass("back");
      $(this).toggleClass("front");
      $(this)
        .next()
        .toggleClass("front");
      console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair()) {
          setTimeout(function() {
            memoryGame.pickedCards[0]
              .children()
              .toggleClass("back")
              .toggleClass("front");
            memoryGame.pickedCards[1]
              .children()
              .toggleClass("back")
              .toggleClass("front");
            memoryGame.pickedCards = [];
          }, 2000);
        } else {
          memoryGame.pickedCards = [];
          $("#pairs_guessed").html(memoryGame.pairsGuessed);
        }
        $("#pairs_clicked").html(memoryGame.pairsClicked);
      }
      if (memoryGame.isFinished()) {
        setTimeout(function() {
          alert("Yeeei!");
        }, 1000);
      }
    };
  });
});
