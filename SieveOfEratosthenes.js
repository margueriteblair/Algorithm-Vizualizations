document.getElementById("welcome").innerText = "Welcome to Margie's Viz of the Sieve of Eratosthenes";
document.getElementById("instructions").innerText = "Input the number you want to see go through the sieve:";

let num = 0;

let sieve = {
    getNum: function() {
        num = parseInt(document.getElementById("sieve_num").value);
        document.getElementById("sieve_num").value = "";
        document.getElementById("grid").innerHTML = '';
        this.createGrid(num);
    }, 
    createGrid: function(num) {
        let container = document.createElement('div');
        container.id = "main";
        container.className = "container";
        for (let i = 1; i <= num; i++) {
            let row = document.createElement('div');
            row.className = "row"
            row.id = "row" + i;
            row.innerText = i.toString();
            container.appendChild(row);
        }
        document.getElementById("grid").appendChild(container);
        this.findPrimes();
    },

    findPrimes: function() {
        let array = [], upperLimit = Math.sqrt(num), output = [];
        for (let i = 0; i <=num; i++) {
            array.push(true);
        }

        for (let i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (let j = i*i; j <=num; j+=i) {
                    array[j] = false;
                }
            }
        }
        for (let i = 2; i <= num; i++) {
            if (array[i]) output.push(i);
        }
        console.log("output: " + output);
        console.log("the number of primes is: " + output.length);
    }
}

