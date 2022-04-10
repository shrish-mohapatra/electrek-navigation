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

/*
    path_cost = trip from previous start to current start

    astarCharger(
        problem
        prev_position -> initally (start_position),
        start_position -> initally (start_position),
        charge,
        path_cost -> initally (0),
        trips [accumulator]  -> initlaly []
    )

    1. astar from start to goal
    2. if reachable (cost <= charge)
        // calc last charge
        return node
      else if(cost <= 100 and prev position was charger)
            add charger time
            add path
            return node
            
    3. otherwise:

        1. find possible chargers from start_pos
        2. for each charger:

            newNode = TNode(parentNode.path)

            1. if prev node is a charger:
                chargeTime = Math.max(0, path_cost - charge)
                charge += chargeTime
                newNode.path += 'c'.repeat(chargeTime)

            1. astar from start to charger                    
            2. if reachable using astar (<= charge):
                newNode.path += startToChargerPath
                newNodePrime = astarCharger(
                    problem, start_position, charger_position, charge , startToChargerCost, newNode
                )
                parentNode.children.push(newNodePrime)
            3. otherwise
                newNode.path = -1
                parentNode.children.push(newNode)
    
        return parentNode


                

*/