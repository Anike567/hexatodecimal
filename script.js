

function convertIt() {
    var num = document.getElementsByClassName("input")[0].value;
    var decimal = 0;
    
    
    var len = num.length;
    var power = len-1;
    
    for (var i = 0; i < len; i++) {
        if(num[i]>='A' && num<='F'){
            decimal += ((num.charCodeAt(i)-55) * (Math.pow(16, power)));
            power--;
        }
        else{
            decimal += (num[i] * (Math.pow(16, power)));
            power--;
        }
    }

    alert(decimal);
}


