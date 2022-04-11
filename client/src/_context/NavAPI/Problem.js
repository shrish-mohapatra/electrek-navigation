const Node = require('./Node.js')

export class Problem {
    constructor(init_state, start_position, goal_position, charge) {
        this.init_state = init_state
        this.start_position = start_position
        this.goal_position = goal_position
        this.charge = charge

        this.max_X = init_state[0].length
        this.max_Y = init_state.length
    }

    is_goal(node) {
        return (node.position.x === this.goal_position.x && node.position.y === this.goal_position.y)
    }

    actions(position) {
        const MOVE_TO_VECT = {
            u: [0, -1],
            d: [0, 1],
            l: [-1, 0],
            r: [1, 0],
        }

        const moves = []

        // Apply movement vector
        for (let move in MOVE_TO_VECT) {
            const new_pos = [position.x + MOVE_TO_VECT[move][0], position.y + MOVE_TO_VECT[move][1]]

            // Check bounds
            if (0 <= new_pos[0] && new_pos[0] < this.max_X && 0 <= new_pos[1] && new_pos[1] < this.max_Y) {                
                const target = this.init_state[new_pos[1]][new_pos[0]]
                
                // Check if it is a building
                if (target != 1) moves.push({ move, x: new_pos[0], y: new_pos[1] })
            }
        }

        return moves

    }

    // Evaluation functions
    f(node) {
        return node.path_cost + this.heuristic_manhattan(node.position)
    }

    heuristic_manhattan(position, position2=this.goal_position) {
        return Math.abs(position.x - position2.x) + Math.abs(position.y - position2.y)
    }

    heuristic_value(position, position2) {
        return Math.abs(position.x - position2.x) + Math.abs(position.y - position2.y) + Math.abs(position2.x - this.goal_position.x) + Math.abs(position2.y - this.goal_position.y)
    }

    manhattan_chargers(position) {
        const chargers = []

        for(let y=0; y<this.init_state.length; y++) {
            for(let x=0; x<this.init_state[y].length; x++) {
                if(this.init_state[y][x] == 4) {
                    chargers.push({
                        x,y,
                        dist: this.heuristic_manhattan(position, {x,y}),
                        hval: this.heuristic_value(position, {x,y})
                    })
                }
            }
        }

        return chargers
    }

}

export default Problem