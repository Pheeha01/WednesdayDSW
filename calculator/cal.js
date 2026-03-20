let screen= document.getElementById('displays');
let number = document.getElementsByClassName('numBtn');

Array.from(number).forEach(function(button) {
    button.addEventListener('click', function(){
        console.log(this.textContent)
         screen.value += this.textContent
    })
});