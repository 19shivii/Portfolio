// class typeWriter{
//     constructor(txtElement,words,wait=3000){
//         this.txtElement=txtElement;
//         this.words=words;
//         this.wait=parseInt(wait,10);
//         this.txt='';
//         this.isDeleting=false;
//         this.wordIndex=0;
//         this.type();
//     }
//     type(){
//         //current index of word
//         const current=this.wordIndex%this.words.length;
//         //get full text of current word
//         const fulltxt=this.words[current];

//         //check if deleting
//         if(this.isDeleting){
//             //remove char
//             this.txt=fulltxt.substring(0,this.txt.length-1);

//         }
//         else{
//             //add char
//             this.txt=fulltxt.substring(0,this.txt.length+1);
//         }
//         //insert txt into element
//         this.txtElement.innerHTML=`<spam class="txt">${this.txt}</span>`
        
//         setTimeout(() => this.type(), 500);
//     }
// }

// //Init on DOM load
// document.addEventListener('DOMContentLoaded',init);


// function init(){
//     const txtElement=document.getElementsByClassName('typed');
//     const  words=JSON.parse(txtElement.getAttribute('data-words'))
//     const wait=txtElement.getAttribute('wait');
//     new typeWriter(txtElement,words,wait);
// }


// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }