
function create(){
    var val=document.getElementById("la").value;
    var h=document.getElementById("pu");
    var width=h.offsetWidth;
    var divwid=width/val;
    console.log(width,divwid)
    var c='';
    for(i=1;i<=val;i++){
       c+="<div style='width:"+divwid+"px;"+"height:"+Math.floor((Math.random() * 500) +100)+"px;border:2px solid black;background-color: rgb(235, 32, 66);'></div>";
    }
    document.getElementById("pu").innerHTML=c;
    
}   


function sort(){
   document.querySelector("#sort").disabled=true;
   document.querySelector("#reset").disabled=true;
   document.getElementById("la").disabled=true;
   document.getElementById("speed").disabled=true;
   var par=document.getElementById('pu');
   child=par.children;
   var sels=document.getElementById('sortings');
   var sold=sels.options[sels.selectedIndex].value;
   if(sold==="bubble"){
      bubble();
   }
   else{
      selection();
   }
}