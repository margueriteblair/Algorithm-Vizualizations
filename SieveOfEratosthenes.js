document.getElementById("welcome").innerText = "Welcome to Margie's Viz of the Sieve of Eratosthenes";
document.getElementById("instructions").innerText = "Input the number you want to see go through the sieve:";

let num = 0;

let sieve = {
    getNum: function() {
        num = parseInt(document.getElementById("sieve_num").value);
        document.getElementById("sieve_num").value = "";
        this.createGrid(num/10, 10, function(el,row,col,i){
            console.log("You clicked on element:",el);
            console.log("You clicked on row:",row);
            console.log("You clicked on col:",col);
            console.log("You clicked on item #:",i);
        });
    }, 
    createGrid: function(rows, cols, callback) {
        var i = 0;
        let grid = document.createElement('table');
        grid.id = 'grid'
        for (let r = 0; r < rows; ++r) {
            var tr = grid.appendChild(document.createElement('tr'));
            for (let c=0; c < cols; ++c) {
                let cell = tr.appendChild(document.createElement('td'));
                cell.innerHTML = ++i;
                cell.id = cell.innerHTML;
                if (i >= num) break;
                cell.addEventListener('click', (function(el, r, c, i) {
                    return function() {callback(el,r,c,i);}
                }) (cell, r, c, i), false);
            }
        }
        document.body.appendChild(grid);
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
                    let toChange = document.getElementById(j.toString());
                    toChange.style["background-color"] = "gray";
                }
            }
        }
        document.getElementById("1").style["background-color"] = "gray";
        let result = document.createElement('h3')
        result.id = "result1"
        result.innerText = "The primes within this threshold are: "
        for (let i = 2; i <= num; i++) {
            if (array[i]) {
                output.push(i);
                result.innerText += " " + i.toString() + ",";
            }
        }
        let result2 = document.createElement('h3');
        result2.id = 'result2';
        result.innerText = result.innerText.substring(0, result.innerText.length-1);
        result2.innerText = "The number of primes is: " + output.length;
        document.body.appendChild(result);
        document.body.appendChild(result2);
        document.querySelector('button').disabled = true;
    },

    reset: function() {
        window.location.reload();
    }
}

