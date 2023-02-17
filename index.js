var ShareBtn = document.getElementById("shareBtn");
ShareBtn.addEventListener("click",function(){
    if(navigator.share){
        navigator.share({
            url:"https://github.com/Shakib181"
        }).then(function(){
            console.log("Thanks for share and click");
        }).catch(function(e){
            console.log("Error 404");
        })
    }
    else{
        console.log("cannot Support");
    }
    
});

