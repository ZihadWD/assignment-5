// code for to go to bus seat and ticket section
document.getElementById('seat-id').addEventListener('click',function(){
    this.style.backgroundColor = "green";
})

document.getElementById('buy').addEventListener('click',function(){
    window.location.hash = '#bus';
})

// code for succes section

function next(){
    const busSection = document.getElementById('bus');
    busSection.classList.add('hidden');

    const succesSection =document.getElementById('success');
    succesSection.classList.remove('hidden');
}




// calculation

const alBtn = document.querySelectorAll('#seat-id');
let count = 0;
let decrease =16;

for(const btn of alBtn){
   btn.addEventListener('click',function(e){
    count = count + 1;
    

    setInnerText('seat',count)

    
   })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}


for(const btn of alBtn){
    btn.addEventListener('click',function(e){
        decrease = decrease - 1;
        setInnerText('seat-count',decrease)
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}


// for price
let price = 0



for(const btn of alBtn){
    btn.addEventListener('click',function(e){
     price = price + 550;
     
 
     setInnerText('seat-price',price);
 
     
    })
 }
 
 function setInnerText(id,value){
     document.getElementById(id).innerText = value;
 }

let className = '';
 for(const btn of alBtn){
    btn.addEventListener('click',function(e){
     className = 'Economy';
     
 
     setInnerText('class-name',className);
 
     
    })
 }
 


// adding coupon
document.getElementById('apply-code').addEventListener('click',function(){
    let applyCode = document.getElementById('coupon').value;
    let codeDiscount = 0;
    if(applyCode === 'NEW15'){
        codeDiscount = price * 0.15;
    }
    else if(applyCode === 'COUPLE20'){
        codeDiscount = price * 0.2;
    }

    // price -= codeDiscount;
    setInnerText('seat-price',price);

    let grandTotal = price - codeDiscount;
       setInnerText('grand',grandTotal);
});

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}