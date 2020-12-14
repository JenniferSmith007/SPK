import alanBtn from '@alan-ai/alan-sdk-web'
// import wordsToNumbers from 'words-to-numbers';
 const ALAN_API_KEY =process.env.ALAN_API_KEY
 alanBtn({
  key: ALAN_API_KEY,
   onCommand: ({ command, color }) => {
    if (command === 'aboutPage') {
    let page = document.querySelector('.page2')  
        window.open(page, '_self') 
        } 
       //  if(command === 'go back'){
                //     news.remove();
                // let body = document.querySelector('body')
                //      body.append(main)
                //      location.reload();
                //    }
    if(command === 'home') {
    let home = document.querySelector('.home')  
      window.open(home, '_self') 
      //location.reload();
      }
      },
     rootEl: document.getElementById("alan-btn"),
     },);
