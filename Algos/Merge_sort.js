function mergeSort(child,low,high){
    if(low<high){
        var mid=Math.floor((low+high)/2);
        mergeSort(child,low,mid);
        mergeSort(child,mid+1,high);
        merge(child,low,mid,high);
    }
}

async function merge(child,low,mid,high){
    var s=low,t=mid+1,p=[];
    while(s<=mid && t<=high){
        child[s].style["backgroundColor"]="pink";
        child[t].style["backgroundColor"]="pink";
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
        if(convert(child[s].style["height"])<convert(child[t].style["height"])){
            p.push(child[s].style["height"]);
            child[s].style["backgroundColor"]="blue";
            child[s].style["backgroundColor"]="pink";
            s++;
        }
        else{
            p.push(child[t].style["height"]);
            child[t].style["backgroundColor"]="blue";
            child[t].style["backgroundColor"]="pink";
            t++;
        }
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
    }
    while(s<=mid){
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
        p.push(child[s].style["height"]);
        child[s].style["backgroundColor"]="blue";
        child[s].style["backgroundColor"]="pink";
        s++;
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
    }
    while(t<=high){
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
        p.push(child[t].style["height"]);
        child[t].style["backgroundColor"]="blue";
        child[t].style["backgroundColor"]="pink";
        t++;
        await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
}

var k=0;
for(var i=low;i<=high;i++){
    await new Promise((resolve) =>
                      setTimeout(() => {
                           resolve();
                        }, 1000)
                 );
    child[i].style["height"]=p[k];
    child[i].style["backgroundColor"]="yellow";k++;
}

}

function convert(val){
return parseInt(val.split("px")[0]);
}