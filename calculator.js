
let calculator = {
    output: document.querySelector('.input-output'),
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

let step = '';

document.querySelector('.rows').addEventListener('click', function(event) {
    input = event.target.innerText;
    calculator.output.innerText += input;

    if(!isNaN(input)){ // ako je broj
        console.log(input + " is a number!");
        calculator.firstOperand = calculator.output.innerText;
        console.log("First operand is: " + calculator.firstOperand)
    }
    //ako je upisan broj i upisujemo funkcionalnost
    else if (false) {
        console.log("Pressed the functionality!")
        calculator.waitingForSecondOperand = True;
        calculator.operator = input;
    }
    else if(input === "C") { // ako nije broj
        input = '';
        calculator.output.innerText = input;
        console.log("Input: " + input);
        console.log("Output: " + calculator.output.innerText);
    } else if(input === "D") {
        let newOutput = calculator.output.innerText;
        // -2 jer se s -1 izbriše D, a nama triba nestat zadnji znak
        calculator.output.innerText = newOutput.slice(0, -2);
    }
    
    //console.log(output.innerText);
    //alert(`You clicked on button ${event.target.innerText}`);
  });
