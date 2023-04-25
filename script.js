document.querySelector('.cross').style.display='none';
document.querySelector('.burger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.burger').style.display='inline';
        document.querySelector('.cross').style.display='none'
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
        }, 300);
        
        document.querySelector('.burger').style.display='none';
    }
})
document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.burger').style.display='inline';
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.burger').style.display='none';
    }

})