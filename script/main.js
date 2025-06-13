vFlipGrid = document.getElementById("vltflipgrid")


for(let rows = 1; rows <= 6; rows++){
    for(let columns = 1; columns <= 6; columns++){
        if(columns != 6 || rows != 6){
            div = document.createElement("div")
            div.style.border = "1px solid"
            div.style.borderColor = "black"
            div.style.padding = "10px"
            div.style.display = "flex"
            div.style.justifyContent = "center"
            div.style.alignItems = "center"
            div.style.flexDirection = "column"


                if((columns + rows)%2 == 0 && columns < 6 && rows < 6){
                    div.style.background = "#38703a"
                }else if((columns + rows)%2 == 1 && columns < 6 && rows < 6){
                    div.style.background  = "#4bc44f"
        }else{
                if(rows == 1 || columns == 1){
                    div.style.background = "#db4d65"
                }else if(rows == 2 || columns == 2){
                    div.style.background = "#5aa633"
                }else if(rows == 3 || columns == 3){
                    div.style.background = "#fcbf23"
                }else if(rows == 4 || columns == 4){
                    div.style.background = "#2397fc"
                }else if(rows == 5 || columns == "5"){
                    div.style.background = "#ba43fa"
                }
        }
            
            
            if (columns == 6 || rows == 6){
                for(let i = 1; i <= 2; i++){
                    divinput = document.createElement("div")
                    divinput.style.width = "inherit"
                    divinput.style.display = "flex"
                    divinput.flexDirection = "row"
                    inputs = document.createElement("input")
                    inputs.type = "number"
                    inputs.style.width = "inherit"

                    if (rows == 6){
                        inputs.style.width = "60px"
                    }

                    if(i == 2){
                        voltorb = document.createElement("img")
                        voltorb.src = "src/images/voltorb.ico"
                        voltorb.style.width = "20px"
                        voltorb.style.height = "20px"
                        divinput.appendChild(voltorb)
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