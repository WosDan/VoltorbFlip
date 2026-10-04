import { gameBoard, bgColors } from './global.js';
import { createGameCell, createInputCell} from './board-components.js';

export function initBoard(onCellClick) {
    // This loop put the cells in the grid, creating a 6x6 board with the last row and column reserved for inputs;
    for (let row = 1; row <= 6; row++) {
        for (let col = 1; col <= 6; col++) {
            
            // The last cell (6,6) is intentionally left empty to create a visual gap in the grid;
            if (col === 6 && row === 6) {
                let emptyDiv = document.createElement('div');
                gameBoard.appendChild(emptyDiv);
                continue;
            }
            
            /* If rows or columns are less than 6, it's a regular cell, 
            otherwise it's an input cell for the last row and column.*/
            let cell = (row < 6 && col < 6)? 
            createGameCell(row, col, onCellClick) : createInputCell(row, col, bgColors);
            
            gameBoard.appendChild(cell);
        }
    }
}

export function resetBoard() {
    gameBoard.innerHTML = '';
    initBoard();
}