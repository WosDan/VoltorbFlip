let gridNumb = 1

let gridMapNumb = {
    6:'InpGrid1',
    31:'InpGrid1',
    12:'InpGrid2',
    32:'InpGrid2',
    18:'InpGrid3',
    33:'InpGrid3',
    24:'InpGrid4',
    34:'InpGrid4',
    30:'InpGrid5',
    35:'InpGrid5'
}

let gridToneMap = {
    1: 'Primary',
    2: 'Secondary',
    3: 'Primary',
    4: 'Secondary',
    5: 'Primary',
    7: 'Secondary',
    8: 'Primary',
    9: 'Secondary',
    10: 'Primary',
    11: 'Secondary',
    13: 'Primary',
    14: 'Secondary',
    15: 'Primary',
    16: 'Secondary',
    17: 'Primary',
    19: 'Secondary',
    20: 'Primary',
    21: 'Secondary',
    22: 'Primary',
    23: 'Secondary',
    25: 'Primary',
    26: 'Secondary',
    27: 'Primary',
    28: 'Secondary',
    29: 'Primary',
}

function createGrids(){
    let div = document.createElement("div")   
    div.id = "grid"+gridNumb.toString()    

    if(gridToneMap[gridNumb]){
        div.classList.add(gridToneMap[gridNumb])
    }
    
    if(gridMapNumb[gridNumb]){
        div.classList.add(gridMapNumb[gridNumb])
    }
    
    gridNumb++
    div.classList.add("Cards")
    return div
}

function resetGridNumb() {
    gridNumb = 1;
}

export {createGrids, resetGridNumb}
