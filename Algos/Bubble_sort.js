

async function bubble(){
  var p=document.getElementById("speed").value;
    var par=document.getElementById('pu');
    child=par.children;
    for(var i=0;i<child.length;i++){
        for(var j=0;j<child.length-1-i;j++){
          
            child[j].style["backgroundColor"]='pink';
            child[j+1].style["backgroundColor"]='pink';
            await new Promise((resolve) =>
            setTimeout(() => {
                 resolve();
              }, 500/p)
       );
             if(convert(child[j].style["height"])>=convert(child[j+1].style["height"])){
                await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 500/p)
              );
                child[j].style["backgroundColor"]='blue';
                child[j+1].style["backgroundColor"]='blue';
                await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 500/p)
                 );
                var temp=child[j].style["height"];
                child[j].style["height"]=child[j+1].style["height"];
                child[j+1].style["height"]=temp;
                await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
           );
             }
             child[j].style["backgroundColor"]='rgb(235, 32, 66)';
            child[j+1].style["backgroundColor"]='rgb(235, 32, 66)';
            await new Promise((resolve) =>
            setTimeout(() => {
                 resolve();
              }, 500/p)
       );
        }
  
        child[j].style["backgroundColor"]='yellow';
    }
    document.querySelector("#sort").disabled=false;
    document.querySelector("#reset").disabled=false;
    document.getElementById("la").disabled=false;
   document.getElementById("speed").disabled=false;
}

function convert(val){
    return parseInt(val.split("px")[0]);
}