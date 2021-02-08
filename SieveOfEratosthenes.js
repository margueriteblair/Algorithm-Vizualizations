document.getElementById("welcome").innerText = "Welcome to Margie's Viz of the Sieve of Eratosthenes";
document.getElementById("instructions").innerText = "Input the number you want to see go through the sieve:";

let num = 0;

let sieve = {


    getNum: function() {
        num = parseInt(document.getElementById("sieve_num").value);
        console.log(num);
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
    },

    findPrimes: function() {

    }
}

// console.log(createGrid(5));