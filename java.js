 let myLibrary =[];
 let log = console.log
let activelibrary =  []

function Book(title,author,pages,read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    if (read.checked == true){
        this.read = 'Finished reading \u2713'
       
    }
    if (read.checked == false ) {
          this.read = 'Not finished ✘'
    }
  
    this.info = function(){
     
        return title +' '+ author +' '+ pages +' '+ read
    }

}


//focus form on click
function blur()  {
    let form = document.getElementById('former')

    if(form.style.display == 'block'){
        document.getElementById('sidebar').style.filter = 'blur(3px)'
        document.getElementById('header').style.filter = 'blur(3px)'
        document.getElementById('bookingcontainer').style.filter = 'blur(3px)'   
    } 
    if (form.style.display == 'none') {
        document.getElementById('sidebar').style.filter = 'blur(0)'
        document.getElementById('header').style.filter = 'blur(0)'
        document.getElementById('bookingcontainer').style.filter = 'blur(0)'   
    }
}





 // Dom elements 
const bookcontainer = document.createElement('div')

bookcontainer.classList.add('bookscontainer')

document.body.appendChild(bookcontainer)
 
const textelements = document.getElementById('alltexts')


document.getElementById('bookingcontainer').appendChild(bookcontainer)




//Submit

document.getElementById('submiti').addEventListener("click", function (){
    

    document.getElementById('former').style.display = 'none'
    addBookToLibrary()

    document.getElementById('sidebar').style.filter = 'blur(0)'
    document.getElementById('header').style.filter = 'blur(0)'
    document.getElementById('bookingcontainer').style.filter = 'blur(0)'  
       
})

// Read button toggle 


function readToggle(obj) {
   
    let button = obj
    let readText = obj.parentNode.parentNode.childNodes[7]

    if (readText.textContent == ('Read: Not finished ✘' )) {
     
        
       button.style.backgroundColor= 'red';
     
         readText.textContent =  'Read: Finished reading \u2713'
        
        button.textContent = 'Unread ✘'

      return
    }
    if (readText.textContent == ('Read: Finished reading \u2713'))

    button.style.backgroundColor= 'lightgreen';
     readText.textContent = ('Read: Not finished ✘' )
      button.textContent = 'Read \u2713'
     
}   

// Display form

function displayForm() {
   
    document.getElementById('former').style.display = 'block'
    blur()
}

// Delete a book from display 

function deletoBook() {
 document.getElementById('card0').remove()
}



// ADD BOOK TO LIBTRARY 
function addBookToLibrary() {
      
      const knyga = new Book(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value ,document.getElementById('reader'))
   
   myLibrary.push(knyga)



   for (let index = 0; index < myLibrary.length; index++) {
         
       
    let el = document.createElement('div')
    
    el.classList.add('book')

    document.getElementById('text1').textContent = ('Author:'+' '+ knyga.author)
    document.getElementById('text2').textContent = ('Title:' + ' ' + knyga.title)
    document.getElementById('text3').textContent = ('Page count:' + ' ' + knyga.pages)
    document.getElementById('text4').textContent = ('Read:' + ' ' + knyga.read)
     
    

     bookcontainer.appendChild(el)

     bookcontainer.id = 'bamb'
     el.append(textelements.cloneNode(true))
     

     //Default read/unread
     if (knyga.read == 'Not finished ✘') {
        document.getElementById('bamb').lastChild.lastChild.childNodes[9].childNodes[3].textContent = 'Read \u2713'
        
        document.getElementById('bamb').lastChild.lastChild.childNodes[9].childNodes[3].style.backgroundColor= 'lightgreen';
     }
     if(knyga.read == 'Finished reading \u2713') {
        document.getElementById('bamb').lastChild.lastChild.childNodes[9].childNodes[3].textContent = 'Unread ✘'
        document.getElementById('bamb').lastChild.lastChild.childNodes[9].childNodes[3].style.backgroundColor= 'red';
        
     }

     myLibrary.splice(0,1)

         el.id = `card0`
         


       
  
   }}
     




const player1 =new Book('The Hobbit','by J.RR. Tolkien','295 pages','not read yet')

