import PQNode from './PQNode'

export class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    put(priority, value) {
        let node = new PQNode(priority, value);
        let curInd = Math.floor(this.queue.length / 2)
        let prev = curInd

        for (let i = 0; i < this.queue; ++i) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, node);
                return
            }
        }

        this.queue.push(node);
        return
    }

    get() {
        if (this.empty()) return -1
        return this.queue.shift()
    }

    empty() {
        return this.queue.length === 0
    }
}

export default PriorityQueue