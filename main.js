import alanBtn from '@alan-ai/alan-sdk-web'
// import wordsToNumbers from 'words-to-numbers';
const ALAN_API_KEY = process.env.ALAN_API_KEY
let news = document.querySelector('.news')
let main = document.querySelector('.main1')
   // First div
//    let latest = document.createElement('div')
//        latest.classList.add('box');
//        latest.setAttribute('id','latest')
//     let h1Latest= document.createElement('h1')
//         h1Latest.classList.add('latest');
//         h1Latest.textContent = 'Latest News'
//     let latestH2 = document.createElement('h2') 
//         latestH2.classList.add('lates')
//         latestH2.textContent = 'Show Me The Latest News'
//         latest.appendChild(h1Latest)
//         latest.appendChild(latestH2)
//          main.appendChild(latest)
//     // 2d div 
//     let termsDiv =document.createElement('div')
//         termsDiv.classList.add('box')
//         termsDiv.setAttribute('id','terms1')
//     let terms = document.createElement('h1')
//         terms.classList.add('terms')
//         terms.textContent= 'Terms'
//     let wordBoxTwo = document.createElement('div')
//          wordBoxTwo.classList.add('wordboxtwo')
//     let wordBoxTwoH2 = document.createElement('h2')
//         wordBoxTwoH2.textContent =`What's Up With.. `
//         wordBoxTwo.appendChild(wordBoxTwoH2)
//     let insideWTB = document.createElement('div')
//         insideWTB.classList.add('wordstwo')
//     let apple = document.createElement('span');
//         apple.textContent= 'Apple'
//         let tesla = document.createElement('span');
//         tesla.textContent= 'Tesla'
        
//         insideWTB.appendChild(apple)
//         insideWTB.appendChild(tesla)
      
//         wordBoxTwo.appendChild(insideWTB);
//         termsDiv.appendChild(terms)
//         termsDiv.appendChild(wordBoxTwo);
//          main.appendChild(termsDiv)
//              //3D Div 
//     let sourceDiv = document.createElement('div')
//          sourceDiv.classList.add('box')
//         sourceDiv.setAttribute('id','source1')
//     let sourceH1 = document.createElement('h1')
//         sourceH1.classList.add('source')
//         sourceH1.textContent ='Source'
//         sourceDiv.appendChild(sourceH1)
//     let wordBox = document.createElement('div');
//         wordBox.classList.add('wordbox')
//     let wordBoxH2 = document.createElement('h2')
//         wordBoxH2.textContent ='Show Me The News From..'
//         wordBox.appendChild(wordBoxH2)  
//     let wordsDiv = document.createElement('div')
//         wordsDiv.classList.add('words')
//     let cnn = document.createElement('span');
//          cnn.classList.add('cnn')   
//         cnn.textContent ='CNN'
//     let msnbc = document.createElement('span');
//         msnbc.textContent ='MSNBC'
// let fox = document.createElement('span');
//     fox.setAttribute('id','fox')
//         fox.textContent ='FOX'
//         wordsDiv.appendChild(cnn)
//         wordsDiv.appendChild(msnbc)
//         wordsDiv.appendChild(fox)
//         wordBox.appendChild(wordsDiv)
//         sourceDiv.appendChild(wordBox)
//         main.appendChild(sourceDiv)
//            //  4th div ///
//     let catagoriesDiv = document.createElement('div')
//         catagoriesDiv.classList.add('box')
//         catagoriesDiv.setAttribute('id','cata1')
//     let catagoriesH1 = document.createElement('h1');
//         catagoriesH1.classList.add('catagories')
//         catagoriesH1.textContent ='Categories'
//         catagoriesDiv.appendChild(catagoriesH1)
//     let divWordBoxThree = document.createElement('div')
//        divWordBoxThree.classList.add('wordboxThree');
//    let divWordBoxThreeH2 = document.createElement('h2')
//        divWordBoxThreeH2.textContent = 'Show Me The News In..'
//        divWordBoxThree.appendChild(divWordBoxThreeH2)
//     let div3 = document.createElement('div')
//         div3.classList.add('words3')
//     let businesses =document.createElement('span')
//         businesses.textContent ='Business'
//     let sport =document.createElement('span')
//         sport.textContent ='Sports'
//     let science =document.createElement('span')
//         science.textContent ='Science'
//         div3.appendChild(businesses)
//         div3.appendChild(sport)
//         div3.appendChild(science)
//         divWordBoxThree.appendChild(div3)
//         catagoriesDiv.appendChild(divWordBoxThree)
//         main.appendChild(catagoriesDiv)
  //     //?   here Alan command start   
alanBtn({
      key: ALAN_API_KEY
      ,
    onCommand: ({ command, articles, article, number ,color }) => {
        if (command === 'aboutPage') {
            let page = document.querySelector('.about')  
             window.open(page, '_self') 
        }
       if (command === 'city') {
          let newyork = document.querySelector('audio ')
          
            
          
          // console.log(newyork);
          newyork.play();
          setTimeout(() => {
            alanBtn().playText('This is My favorite city ...')  
             
         },17000)
          //
         
        
      }
        if (command === 'backgroundColor'){
         console.log(color);
           let colorChangeing = document.querySelector('main')
           
            colorChangeing.style.background = `${color}`
            }
          if(command === 'newHeadlines'){
              main.remove()
              articles.forEach((articleCard,i) => { 
            let newsIm=`https://images.app.goo.gl/t1DSJHDe5T145cNf6`;
			let holdCard = document.createElement('div')
                 holdCard.classList.add('card')
                 news.appendChild(holdCard)
            let imgTop = document.createElement('img')
                imgTop.classList.add('card-img-top')
                imgTop.setAttribute('src', `${articleCard.urlToImage||newsIm}`)
                imgTop.setAttribute('alt',`${articleCard.title}`)
                holdCard.appendChild(imgTop);
            let sourceDateDiv = document.createElement('div') 
                sourceDateDiv.classList.add('source-date')
            let source = document.createElement('h6');
                source.classList.add("source1");
                source.textContent=`Source :${articleCard.source.name}`
                sourceDateDiv.appendChild(source)
            let date = document.createElement('h6');
                     date.classList.add("date")
                     date.textContent =`${new Date(articleCard.publishedAt).toDateString()}`
                     sourceDateDiv.appendChild(date)
                     holdCard.appendChild(sourceDateDiv);
            let cardBody = document.createElement('div')
                     cardBody.classList.add('card-body')
            let cardTitle = document.createElement('h5');
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
            let numArticle = document.createElement('h5');
                      numArticle.classList.add('numOfArticle');
                      numArticle.textContent=`${[i+1]}`
                      divBtnNum.appendChild(numArticle)
                      cardBody.appendChild(divBtnNum)
                      holdCard.appendChild(cardBody)
            }); 
        } 
   

 let card = document.querySelectorAll('.card-title')
     if(command === 'highlight'){
         let activeCard=document.querySelectorAll('.card') 
      // for(let i =0 ; i <activeCard.length;i++){
           if(card[0].textContent===article.title ){
             // activeCard[i].classList.add('activeCard');
             // activeCard[i-1].classList.remove('activeCard')
             activeCard[0].classList.add('activeCard')
          }else if(card[1].textContent===article.title){
            activeCard[0].classList.remove('activeCard')
            activeCard[1].classList.add('activeCard');
          }else if(card[2].textContent===article.title){
            activeCard[1].classList.remove('activeCard')
            activeCard[2].classList.add('activeCard');
          }else if(card[3].textContent===article.title){
            activeCard[2].classList.remove('activeCard')
            activeCard[3].classList.add('activeCard');
         }else if(card[4].textContent===article.title){
            activeCard[3].classList.remove('activeCard')
            activeCard[4].classList.add('activeCard');
            window.scrollTo(0,700);
         }else if(card[5].textContent===article.title){
            activeCard[4].classList.remove('activeCard')
            activeCard[5].classList.add('activeCard');
         }else if(card[6].textContent===article.title){
            activeCard[5].classList.remove('activeCard')
            activeCard[6].classList.add('activeCard');
         }else if(card[7].textContent===article.title){
            activeCard[6].classList.remove('activeCard')
            activeCard[7].classList.add('activeCard');
         }else if(card[8].textContent===article.title){
            activeCard[7].classList.remove('activeCard')
            activeCard[8].classList.add('activeCard');
            window.scrollTo(0,1300);
        }else if(card[9].textContent===article.title){
            activeCard[8].classList.remove('activeCard')
            activeCard[9].classList.add('activeCard');
         }else if(card[10].textContent===article.title){
            activeCard[9].classList.remove('activeCard')
            activeCard[10].classList.add('activeCard');
         }else if(card[11].textContent===article.title){
            activeCard[10].classList.remove('activeCard')
            activeCard[11].classList.add('activeCard');
         }else if(card[12].textContent===article.title){
            window.scrollTo(0,2000);
            activeCard[11].classList.remove('activeCard')
            activeCard[12].classList.add('activeCard');
         }else if(card[13].textContent===article.title){
            activeCard[12].classList.remove('activeCard')
            activeCard[13].classList.add('activeCard');
         }else if(card[14].textContent===article.title){
            activeCard[13].classList.remove('activeCard')
            activeCard[14].classList.add('activeCard');
         }else if(card[15].textContent===article.title){
            activeCard[14].classList.remove('activeCard')
            activeCard[15].classList.add('activeCard');
           window.scrollTo(0,2800);
         }else if(card[16].textContent===article.title){
            activeCard[15].classList.remove('activeCard')
            activeCard[16].classList.add('activeCard');
         }else if(card[17].textContent===article.title){
            activeCard[16].classList.remove('activeCard')
            activeCard[17].classList.add('activeCard');
         }else if(card[18].textContent===article.title){
            activeCard[17].classList.remove('activeCard')
            activeCard[18].classList.add('activeCard');
         }else if(card[19].textContent===article.title){
            activeCard[18].classList.remove('activeCard')
            activeCard[19].classList.add('activeCard');
         }
  }
     if (command === 'open') {
    //   for (let i in articles) {
    //       let wordToNum = number.length > 2 ? wordsToNumbers(number) : number
     //       const num = articles[wordToNum - 1]
    //       if (wordToNum > 20) {
    //           alanBtn().playText('please try Again')
    //       } else if (num) {
    //           window.open(num[number].url, '_blank')
     //       }
        window.open(articles[number-1].url,'_blank')
         alanBtn().playText('Opening...')
          // }     
      }
          if(command === 'go back'){
            news.remove();
        let body = document.querySelector('body')
         body.append(main)
         location.reload();
                    }
                },
     rootEl: document.getElementById("alan-btn"),
     },);