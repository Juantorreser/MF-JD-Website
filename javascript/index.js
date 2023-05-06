
//Animated title
var tabTitle = document.title;
let c = 0;
function writeTitle(){
    
    document.title = tabTitle.substring(0,c);
    if (c == tabTitle.length){
        c = 0;
        setTimeout("writeTitle()",500);
    }
    else{
        c++;
        setTimeout("writeTitle()",500);
    }
}

writeTitle();