import alanBtn from '@alan-ai/alan-sdk-web'

const ALAN_API_KEY =process.env.ALAN_API_KEY
const articleArray = [];
    alanBtn({
       key: ALAN_API_KEY,
     onCommand:({command ,articles})=>{
        if(command === 'newHeadlines'){
          //  console.log(articles)
           articles.forEach((article,i) => {
          let locationToAppendArticles = document.querySelector(".news");
          //const div = createElement("div");
          locationToAppendArticles.innerHTML+=`  <div class="card">
                        <img src="${ article.urlToImage}" class="card-img-top" alt="${article.title}" >
                        <div class='source-date'>
                		<h6 class="source"> Source :${article.source.name}</h6>
                		<h6 class="date">${new Date(article.publishedAt).toDateString()}</h6>
                             </div>
                	    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                         <p class="card-text">${article.description}</p>
                         <div class='btn-num'>
                		 <a href="${article.url}" class="btn btn-primary">more</a>
                         <h5>${[i+1] }</h5>
                        </div>
                        </div> </div> `
                        let card = document.querySelectorAll('.card')
                        articleArray.push(card);
                       /// console.log(articleArray);
                         }); 
                                        
                        } 
            // let cards = document.querySelectorAll('img')
            // for(let i =0; i < cards.length;i++){
            //   cards[i].style.height=500+'px' // }
                if(command === 'highlight'){
                articleArray.forEach((articleBeingRead) => {
              // console.log(articleBeingRead)
                  // articleBeingRead.classList.add("activeCard");
                   
                  // articleBeingRead.classList.add("activeCard")
                   //  ? articleArray[numberArticleBeingRead].classList.remove("activeCard")
                    // : "";
                    });
                
                    // numberArticleBeingRead++;
                   }
               },
          rootEl: document.getElementById("alan-btn"),
    },);
