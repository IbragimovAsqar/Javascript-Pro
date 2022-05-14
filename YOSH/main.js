var age=prompt("Yoshingizni kiriting",'');
var text;
if(age>0&&age<=18){
    text="Yoshsiz. O'qishingiz kerak";
}
else if(age>18&&age<=50){
    text="Ishlashingiz kerak";
}
else if(age>50&&age<=59){
    text="Yaqinda pensiyaga chiqasiz"
}
else if(age>59&&age<=150){
    text="Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)"
}
else{
    text="Nimadir notog'ri ketib qoldi"
}
console.log(text);