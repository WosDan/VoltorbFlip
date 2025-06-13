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
    gridnumb++
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

            /// Grid colors.
            if((columns + rows)%2 == 0 && columns < 6 && rows < 6){
                    div.style.background = "#38703a"
            }else if((columns + rows)%2 == 1 && columns < 6 && rows < 6){
                    div.style.background  = "#4bc44f"
            }else{
                if(rows == 1 || columns == 1){
                    div.classList.add("InpGrid1")
                }else if(rows == 2 || columns == 2){
                    div.classList.add("InpGrid2")
                }else if(rows == 3 || columns == 3){
                    div.classList.add("InpGrid3")
                }else if(rows == 4 || columns == 4){
                    div.classList.add("InpGrid4")
                }else if(rows == 5 || columns == "5"){
                    div.classList.add("InpGrid5")
                }
            }
            
            
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