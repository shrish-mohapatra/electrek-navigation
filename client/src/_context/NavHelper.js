export const NUM_ROWS = 20
export const NUM_COLS = 65

export const createEmptyBoard = (fill) => {
    let grid = []

    if (!fill) fill = () => 0

    for (let i = 0; i < NUM_ROWS; i++) {
        grid.push(Array.from(Array(NUM_COLS), fill))
    }

    return grid
}