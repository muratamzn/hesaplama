let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let button = document.querySelector("#btn");

button.addEventListener("click", displaySonuc);

function displaySonuc(){
    let p = document.querySelector("#deger"); 
    console.log(p);
    const deger = islem(input1.value, input2.value, input3.value);

    console.log(deger);
    // if(a == "" || b == "" || c == ""){
    //     alert("lütfen bir değer giriniz...")
    // } else {
    // }
}
function islem(a, b, c){
    if (c == "+"){
        toplam = a + b;
        return toplam;
    } else if (c == "-"){
        cıkarma = a - b;
        return cıkarma;
    } else if (c == "/"){
        bolme = a / b;
        return toplam;
    } else if (c == "*"){
        carpma = a * b;
        return carpma;
    };
};