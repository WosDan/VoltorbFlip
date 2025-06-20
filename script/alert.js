function Alert(){
    let div = document.getElementById('alert')

    
    function getWindowAspectRatio() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        return width / height;
        
    }

    if (
    (window.screen.orientation.type === "portrait-primary" 
    || window.screen.orientation.type === "portrait-secondary") 
    || !(getWindowAspectRatio() >= 1.4 && getWindowAspectRatio() <= 2.5)
    ) {

        if(!div){
            let div = document.createElement('div');
            div.style.fontFamily = 'Ubuntu';
            div.style.backgroundColor = 'rgb(255, 255, 255)';
            div.style.paddingRight = '3vh';
            div.style.fontSize = '4vh';
            div.style.width = '100%';
            div.style.height = '100%';
            div.id = 'alert';
            div.style.position = 'fixed';
            div.style.top = '0';
            div.style.left = '0';
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center';
            div.style.textAlign = 'center';

            let p = document.createElement('p');
            p.innerText = "If the width of the screen on the position is too small please rotate or try the web in another device.";

            div.appendChild(p);
            document.body.appendChild(div);
        }else{
            div.style.display = 'block'
        }
        
    }else{
        if(div){
            div.style.display = 'none'
            div.remove()
        }   
    }
    console.log("Width:", document.documentElement.clientWidth);
    console.log("Height:", document.documentElement.clientHeight);
    console.log("Aspect Ratio:", document.documentElement.clientWidth / document.documentElement.clientHeight);
    console.log("Orientation:", window.screen.orientation.type);
}

export {Alert}