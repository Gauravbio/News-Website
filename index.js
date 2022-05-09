console.log("this is news website");
//31abecc7e286492ab5df95b2a11088e1

//parameters
let apikey = "31abecc7e286492ab5df95b2a11088e1";
//grab the news container
let newsAccordian = document.getElementById("newsAccordian");

//create a get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,
  1
);
xhr.getResponseHeader("Content-type", "application/json");

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(json.articles);
    let newsHtml = "";

    articles.forEach((element,index) => {
      let news = `<div class="accordion-item">
<h2 class="accordion-header" id="heading${index}">
  <button
    class="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapse${index}"
    aria-expanded="false"
    aria-controls="collapse${index}"
  >
    ${element.title}
  </button>
</h2>
<div
  id="collapse${index}"
  class="accordion-collapse collapse"
  aria-labelledby="heading${index}"
  data-bs-parent="#newsAccordion"
 
>
  <div class="accordion-body">
    ${element.content}<a href="${element.url}" target="_blank">Read more here</a>
  </div>
</div>
</div>`;
      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
