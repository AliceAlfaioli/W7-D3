fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    // console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })
  .then((userData) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      if (index <= userData.length) {
        card.children[0].setAttribute("src", userData[index].img);

        console.log(card.children[1].children[0]);
        card.children[1].children[0].textContent = userData[index].title;
        card.children[1].children[1].textContent = "PREZZO: $" + userData[index].price;
        card.children[1].children[2].addEventListener("click", function () {
          card.remove();
        });
      } else {
        console.log("50");
      }
    });
  })

  .catch((error) => console.log(error));
