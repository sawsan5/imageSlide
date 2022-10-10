
//get slider items
var sliderImages=Array.from(document.querySelectorAll('.sliderr-container img'));

//get number of slides
var  slidesCount=sliderImages.length;

//set current slide
var currentSlide=1;

//slide number element
var slideNumberElement=document.getElementById('slide-number');

//previous and next buttons
var nextButton=document.getElementById('next');
var prevButton=document.getElementById('prev');

//handle click on previous and next
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

//create the main ul element
var paginationElement=document.createElement('ul');

//set id on created ul element
paginationElement.setAttribute('id','pagiation-ul');

//create list items based on slides count
for(var i=1;i<=slidesCount;i++){

//create the li
var paginationItem=document.createElement('li');

//set Attribute
paginationItem.setAttribute('data-index',i);

//set item content
paginationItem.appendChild(document.createTextNode(i));

//appenditems to the main ul list
paginationElement.appendChild(paginationItem);

}

//add the create ul element to the page
document.getElementById('indicators').appendChild(paginationElement);


//get the new created ul
var paginationNewUl=document.getElementById('pagiation-ul');

var paginationBullets=Array.from(document.querySelectorAll('#pagiation-ul li'));

//loop through all bullets item
for(var i=0;i<paginationBullets.length;i++){

    paginationBullets[i].onclick=function(){

        currentSlide=parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}

//trigger the checker function
theChecker();

//next slide funciton
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide++;
        theChecker();
    }

}

//previous slide funciton
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide--;
        theChecker();
    }
    
}

//create the checker function
function theChecker(){

    //set the slide number
slideNumberElement.textContent='slide #' +(currentSlide) + ' of '+(slidesCount);

removeAllActive();

//set active class on current slide
sliderImages[currentSlide-1].classList.add('active');

//set active class on current pagination item

paginationNewUl.children[currentSlide-1].classList.add('active');

//check if current slide is first
if(currentSlide==1){
    prevButton.classList.add('disabled');
}
else{
    prevButton.classList.remove('disabled');
}

//check if current slide is last
if(currentSlide==slidesCount){
    nextButton.classList.add('disabled');
}
else{
    nextButton.classList.remove('disabled');
}

}

function removeAllActive(){

    sliderImages.forEach(function(imge){
        imge.classList.remove('active');

    });

    paginationBullets.forEach(function(bullets){
        bullets.classList.remove('active');

    });
}










