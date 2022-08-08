// Selectors
const slipNumber = document.querySelector('h2');
const advice = document.getElementById('advice');
const diceBtn = document.getElementById('dice-button');

// On DOM load get advice
window.addEventListener('DOMContentLoaded', (event) => {
    getAdvice();
});

// Dice button function
diceBtn.addEventListener('click', function () {
    getAdvice();
})


// Get advice from API function && push to DOM
async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    // console.log(data);
    slipNumber.innerHTML = `advice #${data.slip.id}`
    advice.innerHTML = `&#34;${data.slip.advice}&#34;`
};



/* ALTERNATIVE: fetch .then method

fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        slipNumber.innerHTML = data.slip.id,
            advice.innerHTML = data.slip.advice
    }
    );
*/



