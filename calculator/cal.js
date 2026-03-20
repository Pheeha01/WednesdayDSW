let screen= document.getElementById('displays');
let number = document.getElementsByClassName('numBtn');
let oper = document.getElementsByClassName('operator')
let clearing = document.getElementsByClassName('clear')
let savedNums = 0;
let expression='';


Array.from(number).forEach(function insertNums(button) {
    button.addEventListener('click', function(){
        console.log(this.textContent)
         expression += this.textContent
         screen.value = expression;
    })
    
});

Array.from(oper).forEach(function(button) {
  button.addEventListener('click', function() {
    let operand = this.textContent;
    switch (true) {
      case operand ==='=':
        if (expression !== '') {
            screen.value = eval(expression); 
            expression = screen.value; 
        }
            break;     
      default:
            expression += operand;
            screen.value = expression;
            break;          
    }
  });
});

Array.from(clearing).forEach(function(button){
    button.addEventListener('click', function(){
        switch(this.textContent){
            case('C'):
                screen.value=""
                savedNums=0;
                break;
            case('Del'):
                screen.value = screen.value.slice(0,-1)
                break;
        }
    })
    
})