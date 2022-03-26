const PQNode = require("./PQNode")

class PriorityQueue {
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

        // trying log(n)
        if (this.queue.length == 0) {
            this.queue.push(node);
            return
        }
        else if (this.queue.length == 1) {
            if (this.queue[0] < priority) {
                this.queue.push(node)
            } else {
                this.queue.splice(0, 0, node)
            }
            return
        }

        while (true) {
            if (curInd == 0 || curInd == this.queue.length - 1) {
                this.queue.splice(curInd, 0, node)
                return
            }

            if (this.queue[curInd-1].priority <= priority && priority <= this.queue[curInd+1].priority) {
                this.queue.splice(curInd, 0, node)
                return
            } else if(this.queue[curInd-1].priority <= priority && priority >= this.queue[curInd+1].priority) {
                let temp = curInd
                if (curInd >= prev) {
                    curInd += Math.floor((this.queue.length - curInd) / 2)
                    prev = temp
                } else {
                    curInd += Math.floor((prev - curInd) / 2)
                    prev = temp
                }
            } else {
                let temp = curInd
                if (curInd <= prev) {
                    curInd -= Math.floor(curInd / 2)
                    prev = temp
                } else {
                    curInd -= Math.floor((curInd - prev) / 2)
                    prev = temp
                }
            }
        }
    }

    get() {
        if (this.empty()) return -1
        return this.queue.shift()
    }

    empty() {
        return this.queue.length === 0
    }
}

module.exports = PriorityQueue