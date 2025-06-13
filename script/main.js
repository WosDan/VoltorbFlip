vFlipGrid = document.getElementById("vltflipgrid")

var inpnumb = 1
var gridnumb = 1

function createImage (src /* String */, width /* String */, height /* String */){
    let img = document.createElement("img") 
    img.src = src
    img.style.width = width
    img.style.height = height
    return img
}

function createGrids(){
    div = document.createElement("div")
    div.style.border = "1px solid"
    div.style.borderColor = "black"
    div.style.padding = "10px"
    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.flexDirection = "column"    
    div.id = "grid"+gridnumb.toString()
    
    if((gridnumb%2==0 && gridnumb < 6)||(gridnumb%2 == 1 && gridnumb < 12 && gridnumb > 6)||(gridnumb%2 == 0 && gridnumb < 18 && gridnumb > 12)||(gridnumb%2 == 1 && gridnumb < 24 && gridnumb > 18)||(gridnumb%2 == 0 && gridnumb < 30 && gridnumb > 24)){
        div.classList.add("Even")
    }else if((gridnumb%2==1 && gridnumb < 6)||(gridnumb%2 == 0 && gridnumb < 12 && gridnumb > 6)||(gridnumb%2 == 1 && gridnumb < 18 && gridnumb > 12)||(gridnumb%2 == 0 && gridnumb < 24 && gridnumb > 18)||(gridnumb%2 == 1 && gridnumb < 30 && gridnumb > 24)){
        div.classList.add("Odd")
    }    
    
    switch(gridnumb){
        case 6:
        case 31:
            div.classList.add("InpGrid1")
            break
        case 12:
        case 32:
            div.classList.add("InpGrid2")
            break
        case 18:
        case 33:
            div.classList.add("InpGrid3")
            break
        case 24:
        case 34:
            div.classList.add("InpGrid4")
            break
        case 30:
        case 35:
            div.classList.add("InpGrid5")
            break
    }
    gridnumb++
    div.classList.add("Cards")
    return div
}

function createInput (type /* String */){
    inp = document.createElement("input")
    inp.type = type
    inp.style.width = "inherit"
    inp.id = "input"+inpnumb.toString()
    inpnumb++
    return inp
}

for(let rows = 1; rows <= 6; rows++){
    for(let columns = 1; columns <= 6; columns++){
        if(columns != 6 || rows != 6){
            div = createGrids()            
            if (columns == 6 || rows == 6){
                for(let i = 1; i <= 2; i++){
                    divinput = document.createElement("div")
                    divinput.style.width = "inherit"
                    divinput.style.display = "flex"
                    divinput.flexDirection = "row"
                    inputs = createInput("number")

                    if (rows == 6){
                        inputs.style.width = "60px"
                    }

                    if(i == 2){
                        divinput.appendChild(createImage("src/images/voltorb.ico", "20px", "20px"))
                        inputs.style.width = "40px"
                        if(columns == 6){
                            inputs.style.width = "30px"
                        }
                    }

                    divinput.appendChild(inputs)
                    div.appendChild(divinput)
                } 
            }

            if (columns == 6){
                div.style.width = "50px"
            }
            
            // if(columns == 6 || rows == 6){
            //     inputs.type = "number"
            // }

            vFlipGrid.appendChild(div)
        }
    }


    
}