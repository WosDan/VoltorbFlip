const gameBoard = document.getElementById("game-board");

        function initBoard() {
            const bgColors = {
                1: '#ba43fa',
                2: '#2397fc',
                3: '#fc8123',
                4: '#5aa633',
                5: '#db4d65'
            };

            for (let row = 1; row <= 6; row++) {
                for (let col = 1; col <= 6; col++) {
                    
                    // Esquina inferior derecha (vacía)
                    if (col === 6 && row === 6) {
                        let emptyDiv = document.createElement('div');
                        gameBoard.appendChild(emptyDiv);
                        continue;
                    }

                    let cell = document.createElement('div');
                    cell.dataset.row = row;
                    cell.dataset.col = col;

                    // Si está dentro del rango 5x5, es una CARTA DE JUEGO
                    if (row < 6 && col < 6) {
                        let isPrimary = (row + col) % 2 === 0;
                        let bgClass = isPrimary ? "bg-[rgba(56,112,58,0.85)]" : "bg-[rgba(75,196,79,0.85)]";

                        cell.className = `
                            border border-black p-0 min-w-0 min-h-0 m-0 
                            bg-[url('../src/images/voltorb_card_dark.png')] bg-cover bg-no-repeat bg-center 
                            transition-all duration-200 ease-in-out aspect-square rounded-sm sm:rounded-md
                            hover:bg-[rgb(27,129,32)] hover:border-[rgb(190,255,179)] 
                            hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:scale-105
                            flex flex-col items-center justify-center overflow-hidden cursor-pointer
                            ${bgClass}
                        `;
                        
                        // Espacio reservado para el evento de clic cuando programes tu lógica
                        cell.addEventListener('click', () => {
                            handleCellClick(row - 1, col - 1, cell);
                        });
                    } 
                    // Si está en la fila 6 o columna 6, es un PANEL DE INDICADORES
                    else {
                        let index = row === 6 ? col : row;
                        let cellBgColor = bgColors[index] || '#333333';

                        cell.className = `
                            flex flex-col items-center justify-around p-0.5 aspect-square
                            rounded-sm sm:rounded-md border border-black/50 shadow-sm
                        `;
                        cell.style.backgroundColor = cellBgColor;
                        
                        let isRowBorder = row === 6;
                        appendBorderInputs(cell, index, isRowBorder, cellBgColor);
                    }

                    gameBoard.appendChild(cell);
                }
            }
        }

        // 4. Método para inyectar los inputs con diseño limpio, fondo blanco y icono separado
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

        // Inicializar el tablero visual al cargar
        initBoard();