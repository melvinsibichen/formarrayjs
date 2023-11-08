const numberArray = [];

        const numberForm = document.getElementById('numberForm');
        const numberInput = document.getElementById('numberInput');
        const numbersList = document.getElementById('numbersList');
        const sum = document.getElementById('sum');
        const average = document.getElementById('average');
        const largest = document.getElementById('largest');
        const smallest = document.getElementById('smallest');
        const addNumberButton = document.getElementById('addNumber');
        const calculateButton = document.getElementById('calculate');

        addNumberButton.addEventListener('click', function () {
            const input = parseFloat(numberInput.value);

            if (!isNaN(input)) {
                numberArray.push(input);
                numbersList.innerText = numberArray.join(', ');
                numberInput.value = '';
            } else {
                alert('Invalid input. Please enter a valid number.');
            }
        });

        calculateButton.addEventListener('click', function () {
            if (numberArray.length === 0) {
                alert('Please enter at least one number.');
                return;
            }

            const sumValue = numberArray.reduce((acc, num) => acc + num, 0);
            const averageValue = sumValue / numberArray.length;
            const largestValue = Math.max(...numberArray);
            const smallestValue = Math.min(...numberArray);

            sum.innerText = sumValue;
            average.innerText = averageValue.toFixed(2);
            largest.innerText = largestValue;
            smallest.innerText = smallestValue;
        });