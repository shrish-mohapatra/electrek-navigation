const Node = require('./Node.js')

class Problem {
    constructor(init_state, start_position, goal_position) {
        this.init_state = init_state
        this.start_position = start_position
        this.goal_position = goal_position

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

    heuristic_manhattan(position) {
        return Math.abs(position.x - this.goal_position.x) + Math.abs(position.y - this.goal_position.y)
    }

}

module.exports = Problem