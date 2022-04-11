/*

A star search on available chargers
Moving to a charger (aka result of an action involves performing astar from start to charger)

*/

import PriorityQueue from "./PriorityQueue"
import Problem from "./Problem"
import Solution from "./Solution"

const FUEL_COST = 10

class CNode {
    constructor(position, charge, parent = null, action = "") {
        this.position = position
        this.charge = charge
        this.parent = parent
        this.action = action
    }

    pathCost() {
        return this.action.length
    }

    valueOf() {
        return this.pathCost()
    }
}

class CProblem {
    constructor(init_state, start_position, goal_position, init_charge) {
        this.init_state = init_state
        this.start_position = start_position
        this.goal_position = goal_position
        this.init_charge = init_charge
    }

    isGoal(node) {
        return (node.position.x === this.goal_position.x && node.position.y === this.goal_position.y)
    }

    actions(position, charge) {
        // Determine available chargers from current position OR path straight to goal

        const moves = []
        let chargeFilter = charge

        // Currently at a charger, can charge up to 100%
        if (this.getCell(position) == 4) {
            chargeFilter = 100
        }

        let targets = [this.goal_position, ...this.nearbyChargers(position, chargeFilter)]

        for (const t in targets) {
            const target = targets[t]

            const posToTargetProblem = new Problem(
                this.init_state,
                position,
                target,
            )

            const posToTargetSolution = new Solution(posToTargetProblem)
            const posToTargetPath = posToTargetSolution.astar()

            if (posToTargetPath == -1) continue

            const posToTargetCost = posToTargetPath.length * FUEL_COST

            if (posToTargetCost <= chargeFilter) {
                let move = posToTargetPath
                let newCharge = charge - posToTargetCost

                // Determine how much charge needed before moving
                if (this.getCell(position) == 4) {
                    const chargeTime = Math.max(0, posToTargetCost - charge)
                    move = 'c'.repeat(chargeTime / FUEL_COST) + move
                    newCharge = 0
                }

                moves.push({ move, charge: newCharge, x: target.x, y: target.y })
            }
        }

        return moves
    }

    nearbyChargers(position, charge = this.charge) {
        // Use manhattan distance to get chargers within charge distance

        const chargers = []

        for (let y = 0; y < this.init_state.length; y++) {
            for (let x = 0; x < this.init_state[y].length; x++) {
                if (this.init_state[y][x] == 4) {
                    const mdist = this.heuristicManhattan(position, { x, y })

                    if (mdist * FUEL_COST <= charge) {
                        chargers.push({ x, y, })
                    }
                }
            }
        }

        return chargers
    }

    getCell(position) {
        // Return cell for a corresponding position in the grid
        return this.init_state[position.y][position.x]
    }

    f(node) {
        // Evaluation function
        return node.pathCost() + this.heuristicManhattan(node.position)
    }

    heuristicManhattan(position, position2 = this.goal_position) {
        // Heuristic function using manhattan distance
        return Math.abs(position.x - position2.x) + Math.abs(position.y - position2.y)
    }
}

class CSolution {
    constructor(problem) {
        this.problem = problem
    }

    astar() {
        let node = new CNode(this.problem.start_position, this.problem.init_charge)
        let frontier = new PriorityQueue()
        let reached = { [this.hashPosition(node.position)]: node }

        frontier.put(this.problem.f(node), node)

        while (!frontier.empty()) {
            node = frontier.get().value
            console.log(node)

            if (this.problem.isGoal(node)) return node.action

            const children = this.expand(node)

            for (let c in children) {
                const child = children[c]
                const position = this.hashPosition(child.position)

                if (!(position in reached) || child.pathCost() < reached[position].pathCost()) {
                    reached[position] = child
                    frontier.put(this.problem.f(child), child)
                }
            }
        }

        // No solution
        return -1
    }

    expand(node) {
        const children = []
        const actions = this.problem.actions(node.position, node.charge)

        for (let a in actions) {
            let action = node.action + actions[a].move
            let position = {x: actions[a].x, y: actions[a].y}
            let charge = actions[a].charge

            children.push(new CNode(position, charge, node, action))
        }

        return children
    }

    hashPosition(position) {
        return position.x.toString() + "," + position.y.toString()
    }
}

export const planTrip = (grid, startX, startY, endX, endY, charge) => {
    startX = parseInt(startX)
    startY = parseInt(startY)
    endX = parseInt(endX)
    endY = parseInt(endY)
    charge = parseInt(charge)

    const problem = new CProblem(
        grid,
        {x: startX, y: startY},
        {x: endX, y: endY},
        charge
    )

    const solution = new CSolution(problem)
    const trip = solution.astar()

    console.log(trip)

    return trip
}

export default planTrip