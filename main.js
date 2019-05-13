const field = document.querySelector('div');

function getSize(level) {
    let row = level.slice(0, -2);
    let column = level.slice(3);
    createField(row, column)
}

function createField(row, column) {
    for (let r = 0; r < row; r++) {
        const row = document.createElement('div');
        for (let c = 0; c < column; c++) {
            const column = document.createElement('div');
            column.setAttribute('y', c);
            row.setAttribute('x', r);
            listener(row, column);
            addClasses(row, column);
            reveal(row, column);
            throwMine(column);
        }
    }
}

function throwMine(column) {
    console.log(column)
    // if (Math.random(1) < 0.2) {
    //     column.classList.add('mine');
    // }
}

function addClasses(row, column) {
    row.classList.add("row");
    column.classList.add("column");
    field.append(row);
    row.append(column);
}

function listener(row, column) {
    column.onclick = function(e) {
        if (column.classList.contains('mine')){
            console.log('game is over')
        }
        column.classList.add('bgChange');
        console.log(this.attributes.y);
        console.log(column)
    };

    row.onclick =  function () {
        console.log(this.attributes.x)
    };
}

function reveal() {

}

createField(9, 9);