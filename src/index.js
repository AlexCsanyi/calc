const btnNumbers = document.getElementsByClassName("button-number");
const btnOperators = document.getElementsByClassName("button-operator");
const spanPrevDisplay = document.getElementById("display-prev");
const spanCurrentDisplay = document.getElementById("display-current");

let operator = null;
Array.from(btnNumbers).forEach((btnClickedNumber) => {
    btnClickedNumber.addEventListener("click", function (event) {
        const number = event.target.dataset.number;
        if (!operator) {
            spanPrevDisplay.append(number);
            return;
        }

        spanCurrentDisplay.append(number);
    });
});

Array.from(btnOperators).forEach((btnClickedOperator) => {
    btnClickedOperator.addEventListener("click", function (event) {
        operator = event.target.dataset.operator;

        switch (operator) {
            case "c":
                break;

            case "+":
                parseInt(spanPrevDisplay.textContent);
                break;

            case "-":
                break;

            case "*":
                break;

            case "/":
                break;

            case "=":
                break;

            default:
                break;
        }
    });
});
