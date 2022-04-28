// when the whole DOM is loaded (so everything on the page) then and only then, run the above listen function

document.addEventListener("DOMContentLoaded", function () {
    
    // function askForFunction() {
    //     getFunctionNumber = parseInt(prompt("Which function do you want to run?"));
    //     if (getFunctionNumber === 1) {
    //         add7(7);
    //     }
    //     if (getFunctionNumber === 3) {
    //         mulitply();
    //     }        
    // }

    function add7() {    
        getNumber = parseInt(window.prompt("Enter a number"));
        alert(getNumber + 7);        
    }

    function askForName() {    
        getName = window.prompt("Please enter your name");
        alert("Hello " +getName);
    }    

    function mulitply() {    
        getNum1 = parseInt(window.prompt("Enter first number"));
        getNum2 = parseInt(window.prompt("Enter second number"));
        alert(getNum1*getNum2);
    }

    function capitaliseFirstLetter() {    
        let getText = (window.prompt("Enter text").toLowerCase());                
        let sliced = getText.slice(1);
        const firstChar = getText.charAt(0);
        let upperFirstChar = firstChar.toUpperCase();
        alert("After uppercase: " + upperFirstChar + sliced);
        // console.log(getText);
        // console.log(firstChar);
        // console.log(getText);
        // console.log(upperFirstChar);
        // console.log(upperFirstChar + sliced);        
        // return upperFirstChar + sliced;
    }
    
    function returnLastLetter() {    
        let getText = window.prompt("Enter text");
        let textLength = getText.length;
        // console.log(textLength);
        let lastChar = getText.slice(textLength - 1);
        // console.log(lastChar);
        alert("Last character is: " + lastChar);
        
    }
    
    // adds the listener to the button
    document.getElementById("callFunction1").addEventListener("click", add7);
    document.getElementById("callFunction2").addEventListener("click", askForName);
    document.getElementById("callFunction3").addEventListener("click", mulitply);
    document.getElementById("callFunction4").addEventListener("click", capitaliseFirstLetter);
    document.getElementById("callFunction5").addEventListener("click", returnLastLetter);
    document.getElementById("callFunction6").addEventListener("click", fizzBuzz);
    

    function fizzBuzz() {  

        // ask user for number
        let answer = parseInt(prompt("Please enter number you would like to FizzBuzz up to: "));
        // console.log(answer);

        // increment i and display it until i = the user number
        for (let i = 1; i <= answer; i++) {
            if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
                console.log("FizzBuzz");
            }
            else if (Number.isInteger(i / 3)) {
                console.log("Fizz");
            }
            else if (Number.isInteger(i / 5)) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }    

  });
