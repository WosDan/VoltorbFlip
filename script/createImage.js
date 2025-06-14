function createImage (src /* String */, width /* String */, height /* String */){
    let img = document.createElement("img") 
    img.src = src
    img.style.width = width
    img.style.height = height
    return img
}

export {createImage}