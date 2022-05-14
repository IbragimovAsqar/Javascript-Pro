 son1=prompt("Birinchi sonni kiriting",'');
var a=parseInt(son1);
var son2=prompt("Ikkinchi sonni kiriting",'');
var b=parseInt(son2);
var son3=prompt("Uchinchi sonni kiriting",'');
var c=parseInt(son3);
var text;
//  birinchi holat
if(a<b&&b<c&&a<c){
    text=(a+c)/2;
}
// ikkinchi holat
else if(a<b&&b>c&&a<c){
    text=(a+b)/2;
}
// uchinchi holat
else if(a>b&&b<c&&a<c){
    text=(c+b)/2;
}
// to'rtinchi holat
else if(a>b&&b<c&&a>c){
    text=(a+b)/2;
}
// beshinchi holat
else if(a<b&&b>c&&a>c){
    text=(c+b)/2;
}
// oltinchi holat
else if(a>b&&b>c&&a>c){
    text=(a+c)/2;
}
console.log(text);