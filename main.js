import alanBtn from '@alan-ai/alan-sdk-web'
 //import wordsToNumbers from 'words-to-numbers';
const ALAN_API_KEY =process.env.ALAN_API_KEY
const articleArray = [];

let number =0;
alanBtn({
      key: ALAN_API_KEY,
      onCommand:({command ,articles,article,number})=>{
          if(command === 'newHeadlines'){
         
            console.log(articles)
              articles.forEach((articleCard,i) => { 
                let newsIm=`https://images.app.goo.gl/t1DSJHDe5T145cNf6`;
			          let div = document.querySelector('.news')
                let holdCard = document.createElement('div')
                     holdCard.classList.add('card')
                div.appendChild(holdCard)
                let imgTop = document.createElement('img')
                    imgTop.classList.add('card-img-top')
                    imgTop.setAttribute('src', `${articleCard.urlToImage||newsIm}`)
                    imgTop.setAttribute('alt',`${articleCard.title}`)
                    holdCard.appendChild(imgTop);
                let sourceDateDiv = document.createElement('div') 
                    sourceDateDiv.classList.add('source-date')
                let source = document.createElement('h6');
                    source.classList.add("source");
                    source.textContent=`Source :${articleCard.source.name}`
                     sourceDateDiv.appendChild(source)
                 let date = document.createElement('h6');
                     date.classList.add("date")
                     date.textContent =`${new Date(articleCard.publishedAt).toDateString()}`
                     sourceDateDiv.appendChild(date)
                     holdCard.appendChild(sourceDateDiv);
                 let cardBody =document.createElement('div')
                     cardBody.classList.add('card-body')
                 let cardTitle =document.createElement('h5');
                     cardTitle.classList.add('card-title')
                     cardTitle.textContent=`${articleCard.title}`
                     cardBody.appendChild(cardTitle);
                 let description = document.createElement('p')
                     description.classList.add('card-text')
                     description.textContent =`${articleCard.description}`
                     cardBody.appendChild(description);
                  let divBtnNum = document.createElement('div')
                      divBtnNum.classList.add('btn-num')
                 let btnUrl= document.createElement('a')
                     btnUrl.setAttribute('href',`${articleCard.url}`)
                     btnUrl.classList.add('btn')
                     btnUrl.classList.add('btn-primary')
                     btnUrl.textContent ='more'
                     divBtnNum.appendChild(btnUrl)
                 let numArticle =document.createElement('h5');
                     numArticle.classList.add('numOfArticle');
                     numArticle.textContent=`${[i+1]}`
                     divBtnNum.appendChild(numArticle)
                     cardBody.appendChild(divBtnNum)
                     holdCard.appendChild(cardBody)
                                   }); 
                                   } 
        let card = document.querySelectorAll('.card-title')
          if(command === 'highlight'){
                for(let i =0; i< card.length;i++){
                    if(card[i].textContent===article.title ){
               let activeCard =document.querySelector('.card') 
                   activeCard.classList ='activeCard'
                    }else if( activeCard.classList.contains()){
                    }
                  }
           }
          if(command === 'open'){
                 //console.log(number); 
                 for(let i in articles){
                   //console.log(articles[i].url)
               // let changStringToNum = number.length > 0 ? wordsToNumbers():number
                 window.open(articles[number].url,'_blank')
                 }
                 }
                },
     rootEl: document.getElementById("alan-btn"),
 },);