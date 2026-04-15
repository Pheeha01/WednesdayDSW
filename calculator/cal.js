let screen= document.getElementById('displays');
let number = document.getElementsByClassName('numBtn');
let oper = document.getElementsByClassName('operator')
let clearing = document.getElementsByClassName('clear')
let percent = document.getElementById('percent')
let expression='';

Array.from(number).forEach(button => {
    button.addEventListener('click', function(){
         expression += this.textContent
         screen.value = expression;
    })    
});

Array.from(oper).forEach(button => {
  button.addEventListener('click', function() {
    let operand = this.textContent;
    switch (operand) {
      case'=':
        if (expression !== '') {
             if (expression.includes("%")){
                let numbers= expression.split(/([+\-*/])/)
                numbers = numbers.map(num=>{
                    if(num.includes("%")){
                        num= num.slice(0,-1)
                        num = String(Number(num/100))
                    }
                    return num
                })
                expression = numbers.join('');
                screen.value = eval(expression);
                expression = screen.value;  
            }
            else{
                screen.value = eval(expression);
                expression = screen.value; 
            }             
        }
        else{
            expression ='0'
            screen.value = Number(expression)
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
                expression =''
                screen.value = expression;
                break;
            case('Del'):
                expression = screen.value.slice(0,-1)
                screen.value = expression
                break;
        }
    })   
})

percent.addEventListener('click', function(){
    expression += this.textContent
    screen.value = expression;
})
