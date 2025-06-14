    import {createImage} from './createImage.js'

    import {createGrids, resetGridNumb} from './createGrids.js'

    import {createInput, resetInpNumb} from './createInput.js'

    let vFlipGrid = document.getElementById("vltflipgrid")

    for(let rows = 1; rows <= 6; rows++){
        for(let columns = 1; columns <= 6; columns++){
            if(columns == 6 && rows == 6){
                continue
            }
                let div = createGrids()            
                if (columns == 6 || rows == 6){
                    createButtons(div, columns == 6) 
                }

                if (columns == 6){
                    div.classList.add("cifgd")
                }else if(rows == 6){
                    div.classList.add("rifgd")
                }

                vFlipGrid.appendChild(div)
            
        }
    }

    function createButtons(div, columns){
        for(let i = 1; i <= 2; i++){
                        let divinput = document.createElement("div")
                        divinput.classList.add("DivInput")
                        let inputs = createInput("number", "Input")
                        
                        if(i == 1){
                            if(columns){
                                inputs.classList.add("CInput")
                                divinput.classList.add("CDivInput")
                            }else{
                                inputs.classList.add("RInput")
                                divinput.classList.add("RDivInput")
                            }
                        }

                        if(i == 2){
                            divinput.appendChild(createImage("src/images/voltorb.ico", "20px", "20px"))
                            if(columns){
                                inputs.classList.add("CInput2")
                                divinput.classList.add("CDivInput2")
                            }else{
                                inputs.classList.add("RInput2")
                                divinput.classList.add("RDivInput2")
                            }
                        }

                        divinput.appendChild(inputs)
                        div.appendChild(divinput)
                    }
    }