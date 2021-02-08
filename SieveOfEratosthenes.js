document.getElementById("welcome").innerText = "Welcome to Margie's Viz of the Sieve of Eratosthenes";
document.getElementById("instructions").innerText = "Input the number you want to see go through the sieve:";

let num = 0;

let sieve = {


    getNum: function() {
        num = parseInt(document.getElementById("sieve_num").value);
        console.log(num);
        document.getElementById("sieve_num").value = "";
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
            for (let j = 1; j <= num; j++) {
                let box = document.createElement('div');
                box.className='box';
                box.innerText = (i*j).toString();
                row.appendChild(box);
            }
            container.appendChild(row);
        }
        return container;
    }
}

// console.log(createGrid(5));