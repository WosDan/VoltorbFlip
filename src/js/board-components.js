export function createGameCell(row, col, onCellClick) {
    let cell = document.createElement('div');
    cell.dataset.row = row;
    cell.dataset.col = col;
    
    // The color of the cells alternates based on the sum of row and column indices;
    let isPrimary = (row + col) % 2 === 0;
    let bgClass = isPrimary ? "bg-[rgba(56,112,58,0.85)]" : "bg-[rgba(75,196,79,0.85)]";
        
    // Apply the background image and hover effects with tailwind classes, including a transition for smooth hover effects;
    cell.className = `
        border border-black p-0 min-w-0 min-h-0 m-0 
        bg-[url('../src/images/voltorb_card_dark.png')] bg-cover bg-no-repeat bg-center 
        transition-all duration-200 ease-in-out aspect-square rounded-sm sm:rounded-md
        hover:bg-[rgb(27,129,32)] hover:border-[rgb(190,255,179)] 
        hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:scale-105
        flex flex-col items-center justify-center overflow-hidden cursor-pointer                            ${bgClass}
    `;
            
    // Add click event listener to handle cell clicks
    cell.addEventListener('click', () => {
        if(typeof onCellClick === 'function') {
            onCellClick(row, col);
        }
    });    

    return cell;
}      

export function createInputCell(row, col, bgColors){
    let cell = document.createElement('div');
    cell.dataset.row = row;
    cell.dataset.col = col;
    // The background color of the border cells is determined by the index which is either the row or column index, 
    // Depending on whether it's the last row or last column;
    let index = row === 6 ? col : row;
    let cellBgColor = bgColors[index] || '#333333';

    // Apply the background color and styling for border cells with inputs;
    cell.className = `
        flex flex-col items-center justify-around p-0.5 aspect-square
        rounded-sm sm:rounded-md border border-black/50 shadow-sm
    `;
    cell.style.backgroundColor = cellBgColor;
                
    let isRowBorder = row === 6;
    appendBorderInputs(cell, index, isRowBorder, cellBgColor);

    return cell;
}

function appendBorderInputs(container, index, isRowBorder, cellBgColor) {
    let baseIdNum = isRowBorder ? (index - 1) * 2 + 1 : 10 + (index - 1) * 2 + 1;

    for (let i = 1; i <= 2; i++) {
        let wrapper = document.createElement("div");
        wrapper.className = "flex items-center justify-center gap-1 w-full bg-white rounded px-1 py-0.5 border border-black/30 shadow-inner";

        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
                
        input.id = `input${baseIdNum + (i - 1)}`;

        input.className = `
            w-full h-2.5 md:h-3.5 min-w-0 text-center bg-transparent text-zinc-900 font-bold text-[10px] md:text-xs focus:outline-none
        `;
                
        input.style.accentColor = cellBgColor;

        if (i === 1) {
            input.max = "15";
            input.classList.add("PointInput");
            wrapper.appendChild(input);
        } else {
            input.max = "5";
            input.classList.add("BombInput");
            
            let icon = document.createElement("img");
            icon.src = "./src/images/voltorb.ico";
            icon.className = "w-3 h-3 md:w-3.5 md:h-3.5 object-contain shrink-0";
                    
            wrapper.appendChild(icon);
            wrapper.appendChild(input);
        }

        container.appendChild(wrapper);
    }
}
