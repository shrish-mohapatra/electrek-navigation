class Node {
    constructor(position, parent=null, action="", path_cost=0) {
        this.position = position
        this.parent = parent
        this.action = action
        this.path_cost = path_cost
    }

    valueOf() {
        return this.path_cost
    }
}

module.exports = Node