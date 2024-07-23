const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInteger = () => {
    const minNum = document.querySelector('#min_num');
    const maxNum = document.querySelector('#max_num')
    const min = Number(minNum.value);
    const max = Number(maxNum.value);


    const output = document.querySelector('#output');
    output.textContent = randomNumber(min, max);
}

const btn = document.querySelector('#btn');
btn.addEventListener("click", randomInteger)