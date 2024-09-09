// document.addEventListener("DOMContentLoaded",()=>{
//     const images = document.querySelectorAll("img");
//     for (const image of images){
//         fetch("https://dog.ceo/api/breeds/image/random")
//         .then(response=>response.json())
//         .then(data=> {
//             image.src=data.message 
//             image.width=300;
//             image.height=300;
//         })
//     }
// })

document.addEventListener("DOMContentLoaded", () => {  
    const imageContainer = document.getElementById("topboard"); 
    const images = imageContainer.querySelectorAll("img");
    
    for (const image of images) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          image.src = data.message;
          image.width = 300; 
          image.height = 300; 
        })
        .catch(error => {
          console.error("Error fetching dog image:", error);        
        });
    }
  });
  
  function fetchQuoteOfTheDay() {
    const apiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const   
   quote = data.extract;
        document.getElementById('quote-container').textContent=quote;
        console.log(quote); 
        
      })
      .catch(error => {
        console.error('Error fetching fact:', error);
      });
  }
  
  fetchQuoteOfTheDay();
  
  