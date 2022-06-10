async function selection(){
    var p=document.getElementById("speed").value;
    var par=document.getElementById('pu');
    child=par.children;
    for(var i=child.length-1;i>0;i--){
        var maxi=child[i];
        maxi.style["backgroundColor"]='pink';
        for(var j=i-1;j>=0;j--){
             child[j].style["backgroundColor"]='white';
             await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
           );
             if(convert(maxi.style["height"])<convert(child[j].style["height"])){
                await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
              );
                maxi.style["backgroundColor"]='red';
                maxi=child[j];
                maxi.style["backgroundColor"]='pink';
                
                await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
           );
             }
             else
             child[j].style["backgroundColor"]='red';
        }
        await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
           );
        maxi.style["backgroundColor"]='blue';
        child[i].style["backgroundColor"]='blue';
        await new Promise((resolve) =>
        setTimeout(() => {
             resolve();
          }, 500/p)
   );
        var temp=maxi.style["height"];
        maxi.style["height"]=child[i].style["height"];
        child[i].style["height"]=temp;
        maxi.style["backgroundColor"]='red';
        child[i].style["backgroundColor"]='yellow';
       
        await new Promise((resolve) =>
                setTimeout(() => {
                     resolve();
                  }, 500/p)
           );
    }
    child[0].style["backgroundColor"]='yellow';
    document.querySelector("#sort").disabled=false;
    document.querySelector("#reset").disabled=false;
    document.getElementById("la").disabled=false;
   document.getElementById("speed").disabled=false;
}

function convert(val){
    return parseInt(val.split("px")[0]);
}
