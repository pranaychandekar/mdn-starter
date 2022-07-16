// let myImage = document.querySelector('img');

// myImage.onclick = () => {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc == 'assets/images/firefox.jpeg') {
//         myImage.setAttribute('src', 'assets/images/firefox2.png');
//     } else {
//         myImage.setAttribute('src', 'assets/images/firefox.jpeg');
//     }
// }


let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName + '!';
}

myButton.onclick = () => {
    setUserName()
}