import {initBoard} from './board.js';

const handleTempCellClick = (row, col, cell) => {
    console.log(`Clicked cell -> Fila: ${row}, Columna: ${col}`, cell);
};

initBoard(handleTempCellClick);