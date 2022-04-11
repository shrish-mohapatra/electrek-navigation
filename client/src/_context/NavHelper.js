export const NUM_ROWS = 20
export const NUM_COLS = 65
// export const NUM_COLS = 14

export const createEmptyBoard = (fill) => {
    let grid = []

    if (!fill) fill = () => 0

    for (let i = 0; i < NUM_ROWS; i++) {
        grid.push(Array.from(Array(NUM_COLS), fill))
    }

    grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
    ]

    return grid
}

export const generateBoard = () => {
    let grid = []

    for(let i = 0; i < NUM_ROWS; i++) {
        const row = Array.from(Array(NUM_COLS), () => 0)

        for(let j=0; j < NUM_COLS; j++) {
            // Grid bounds
            if(i == 0 || j < 2 || i == NUM_ROWS - 1 || j == NUM_COLS - 1) {
                row[j] = 1
                continue
            }

            let rand = Math.random()

            // Intersections
            if(i % 2 == 0 && j % 2 == 0) {
                row[j] = 1
            }

            // Random buildings
            if (i%2 != j%2 && rand < 0.2) {
                row[j] = 1
            }

            // Random chargers
            if (rand < 0.04) {
                row[j] = 4
            }
        }

        grid.push(row)
    }

    return grid
}

export const generatePositions = (route, start) => {
    // Take route string (ex. "ulllpd") and return array of positions

    const move_map = {
        'u': [-1, 0],
        'd': [1, 0],
        'l': [0, -1],
        'r': [0, 1],
        'c': [0,0],
    }

    let positions = [start]

    for(let m in route) {
        const vect = move_map[route[m]]
        start = [start[0] + vect[0], start[1] + vect[1]]
        positions.push(start)
    }

    return positions
}