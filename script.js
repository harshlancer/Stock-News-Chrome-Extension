fetch(
  "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=Y431ITMYNB45WYH9"
)
  .then((response) => response.json())
  .then((stockData) => {
    const links = [
      document.getElementById("visit1"),
      document.getElementById("visit2"),
      document.getElementById("visit3"),
      document.getElementById("visit4"),
      document.getElementById("visit5"),
    ];

    const stockTextElements = [
      document.getElementById("stockText1"),
      document.getElementById("stockText2"),
      document.getElementById("stockText3"),
      document.getElementById("stockText4"),
      document.getElementById("stockText5"),
    ];

    for (let i = 0; i < 5; i++) {
      const newsText = stockData.feed[i].title;
      const url = stockData.feed[i].url;
      stockTextElements[i].innerHTML = newsText;

      // Assign click event handler to each link
      links[i].addEventListener("click", () => {
        window.open(url, "_blank"); // Open the URL in a new tab/window
      });
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
