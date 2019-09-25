function addTwoDigits(n){
    var dig1=(String(n).substr(0,1));
    var dig2=(String(n).substring(1));
    var SumDig=0;
    SumDig=parseInt(dig1)+parseInt(dig2);
    return(SumDig);
}
console.log(addTwoDigits(13));