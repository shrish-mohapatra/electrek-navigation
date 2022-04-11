import Node from './Node'
import PriorityQueue from './PriorityQueue.js'

export class Solution {
    constructor(problem) {
        this.problem = problem
    }

    astar() {
        let node = new Node(this.problem.start_position)
        let frontier = new PriorityQueue()
        let reached = { [this.hash_position(node.position)]: node }

        frontier.put(this.problem.f(node), node)

        while (!frontier.empty()) {
            node = frontier.get().value

            if (this.problem.is_goal(node)) return node.action
            const children = this.expand(node)

            for (let c in children) {
                const child = children[c]
                const position = this.hash_position(child.position)

                if (!(position in reached) || child.path_cost < reached[position].path_cost) {
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
        const actions = this.problem.actions(node.position)

        for (let a in actions) {
            let action = node.action + actions[a].move
            let cost = node.path_cost + 1
            let position = {x: actions[a].x, y: actions[a].y}
            children.push(new Node(position, node, action, cost))
        }

        return children
    }

    hash_position(position) {
        return position.x.toString() + "," + position.y.toString()
    }
}

export default Solution