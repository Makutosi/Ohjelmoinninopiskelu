/* Write a function that accepts address information 
(first name, last name, neighborhood address, zip code, city, phone, email) 
and then enter information for at least 3 people into the function. */

// Function to create an address register
function newAddressRegister (firstName, lastName, address, zipCode, city, phone, email) {
    return {
        firstName: firstName,
        lastName: lastName,
        address: address, 
        zipCode: zipCode,
        city: city, 
        phone: phone,
        email: email
    };
}

// Create entries for 3 people
var Paavo = newAddressRegister("Paavo", "Nurmi", "Rauhankatu 1", "20200", "Turku", "050 1234567", "paavo@info.com");
var Tuuli = newAddressRegister("Tuuli", "Matinsalo", "Mikonkatu 2", "00100", "Helsinki", "040 1234567", "tuuli@fit.fi");
var Väinö = newAddressRegister("Väinö", "Linna", "Mannerheimintie 1", "00110", "Helsinki", "09 765431", "vaino@gmail.com");

// Display the address information
console.log(Tuuli); 
/* {
    firstName: 'Tuuli',
    lastName: 'Matinsalo',
    address: 'Mikonkatu 2',
    zipCode: '00100',
    city: 'Helsinki',
    phone: '040 1234567',
    email: 'tuuli@fit.fi'
  }*/
console.log(Väinö);
console.log(Paavo);

/* 
newAddressRegister 関数:
7つの引数を受け取り、それらをオブジェクトとして返す。
引数は firstName, lastName, address, zipCode, city, phone, email。

オブジェクト作成:
key: value の形式でプロパティ（key）とその値（value）を指定
もしプロパティ名と値が同じ名前であれば、簡略化して1回だけ書ける（これはES6以降の機能）。
ここでは、引数名（firstName, lastName, ...）とプロパティ名が同じなので、次のように簡略化できる
function newAddressRegister(firstName, lastName, address, zipCode, city, phone, email) {
    return {
        firstName,
        lastName,
        address,
        zipCode,
        city,
        phone,
        email
    };
}

console.log:
作成したオブジェクトの内容をコンソールに表示

このようなプログラムは、現実のアプリケーションやシステムで以下のような場面で使われる。
特に住所や個人情報の管理が必要な場合に役立つ。
*/