let images = document.getElementById('images');
let button = document.getElementById('random');

button.addEventListener('click', randomImage );

    let repeatedNum = [];

function randomImage (event) {
    images.innerHTML = ' ';

    for(let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 10) + 1;
        // console.log(random);
        if (repeatedNum.includes(random)) {

            while(repeatedNum.includes(random)) {
                random = Math.floor(Math.random() * 10) + 1;
            }

            repeatedNum.push(random);
        } else {
            repeatedNum.push(random);
        }

        let pic = document.createElement('img');
        pic.src = random + '.jpg';
        images.appendChild(pic); 
    }

    repeatedNum = [];

}