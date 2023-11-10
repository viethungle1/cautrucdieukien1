let year=parseInt(prompt("Nhap so nam"));
let isleapyear=false;
if (year%4==0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isleapyear = true;
        }
    } else {isleapyear=true
}

if (isleapyear) {
    alert(year+" La nam nhuan");
}
}else {
    alert(year+" Khong phai la nam nhuan")
}

