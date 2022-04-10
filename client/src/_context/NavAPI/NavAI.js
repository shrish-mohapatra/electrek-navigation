import Problem from "./Problem"
import Solution from "./Solution"
/*

1. Perform A* from start to goal
2. If path_cost < current charge
    astar_charger()

    a. manhattan distance from start to all chargers

    [
        {x: 3, y: 4, dist: 6},
        {x: 3, y: 4, dist: 6},
        {x: 3, y: 4, dist: 6},
    ]
 
   [[0,0,0],
    [0,2,0],
    [0,0,0],
    [0,0,0],
    ]

    

    grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 2, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ,
    ]


    b. select available charges (meet path cost req)
    c. for each avail charger
        i. perform astar from start to charger
            - in the heuristic function, assume need to charge 100%
            - super charger: h_n = manhattan_dist + (100%-current_charge)
            - normal charger: h_n = manhattan_dist + ((100%-current_charge) * 2)
        ii. peform astar from charger to goal
            - once we actually determine path cost to a charger, reduce 'c' actions to optimize charge time
        iii. if path_cost > 100%, recursively apply steps a-c
        iv. otherwise, return path

    
    charging 60% at a regular charger is represented as follows:
    `cccccccccccc` -> 12 'c' characters for each percent
    `cc` = 10%

    charging 60% at a super charger is represented as follows:
    `ssssss` -> 6 'c' characters for each percent
    `s` = 10%

*/

const FUEL_COST = 10

class TNode {
    constructor(path, children=[]) {
        this.path = path
        this.children = children
    }
}


export const planTrip = (grid, startX, startY, endX, endY, charge) => {
    /*
        call astarCharger() -> tripNode

        1. get possible trips from tripNode
            1. dfs traversal of tripNode, storing leafnode paths in an array (trips)
            trips = ['uuucccddrrrll', 'uuucccddrrrll', 'uuucccddrrrll']
        2. choose smallest trip element from trips

    */


    startX = parseInt(startX)
    startY = parseInt(startY)
    endX = parseInt(endX)
    endY = parseInt(endY)
    charge = parseInt(charge)
    
    // let problem = new Problem(grid, {x: startX, y: startY}, {x: endX, y: endY}, charge)

    const possibleRoutes = astarCharger(
        grid,
        {x: endX, y: endY},
        {x: startX, y: startY},
        {x: startX, y: startY},
        charge,
        0,
        new TNode("")
    )
    console.log(possibleRoutes)


    return ""
}

const astarCharger = (grid, goal, prev_position, start_position, charge, path_cost, tripNode) => {
    console.log("astarCharger call", 
    {grid, goal, prev_position, start_position, charge, path_cost, tripNode})
    console.log("0", {prev_position})
    let startToGoalProblem = new Problem(grid, start_position, goal, charge)
    let startToGoalSolution = new Solution(startToGoalProblem)
    const startToGoalPath = startToGoalSolution.astar()
    const startToGoalCost = startToGoalPath.length * FUEL_COST
    
    console.log("1", {prev_position})
    // Reachable checks
    // Rechable from start node based on initial charge
    if(startToGoalCost <= charge) {
        console.log("Found goal 1")
        tripNode.path += startToGoalPath
        return tripNode
    } 
    // Reachable from charger based on 100% charge
    else if(startToGoalCost <= 100 && grid[start_position.y][start_position.x] == 4) {
        console.log("Found goal 2")
        const chargeTime = Math.max(0, startToGoalCost - charge)
        charge += chargeTime
        tripNode.path += 'c'.repeat(chargeTime/FUEL_COST)
        tripNode.path += startToGoalPath
        return tripNode
    }
    console.log("2", {prev_position})
    // Find nearby chargers
    let chargers = startToGoalProblem.manhattan_chargers(start_position)
    let chargeFilter = 100

    if (grid[start_position.y][start_position.x] == 2) {
        chargeFilter = charge
    }

    chargers = chargers.filter(c => ((c.dist * FUEL_COST <= chargeFilter) && (c.dist != 0)))
    
    console.log({chargers})
    console.log("3", {prev_position})
    // Determine possible trips to each charger
    for(const c in chargers) {
        const charger = chargers[c]

        let newNode = new TNode(tripNode.path)
        console.log("4", {prev_position})
        // Determine required charge at previous charger
        console.log("can we charge?", grid[prev_position.y][prev_position.x])
        // if(grid[start_position.y][start_position.x] == 4) {
        //     console.log("charging...")
        //     const chargeTime = Math.max(0, path_cost - charge)
        //     charge += chargeTime
        //     newNode.path += 'c'.repeat(chargeTime/FUEL_COST)
        //     console.log({chargeTime})
        // }

        let startToChargerProblem = new Problem(
            grid,
            start_position,
            {x: charger.x, y: charger.y},
            100
        ) 

        let startToChargerSolution = new Solution(startToChargerProblem)
        const startToChargerTrip = startToChargerSolution.astar()
        const startToChargerCost = startToChargerTrip.length * FUEL_COST
        
        console.log({startToChargerProblem, startToChargerTrip, startToChargerCost})
        
        // Goal is reachable from charger check
        if(startToChargerCost <= chargeFilter) {

            //check if charge - startToChargerCost > 0, if not add them c's
            // charge =40  sTc= 80  newCharge = 0       chargeTime = 4
            // charge=80  stc=80    newCharge = 0       chargeTime = 0
            // charge=80  stc=60    newCharge = 20      chargeTime = 0
            // const newCharge = Math.max(0, charge - startToChargerCost)
            // const chargeTime = Math.max(0, startToChargerCost - charge)
            // console.log({newCharge, chargeTime})
            // newNode.path += 'c'.repeat(chargeTime/FUEL_COST)
            let newCharge = charge - startToChargerCost
            let chargeTime = 0
            console.log("New Charge", newCharge)
            if(grid[start_position.y][start_position.x] == 4) {
                console.log("charging...")
                chargeTime = Math.max(0, -1*newCharge)
                console.log({charge, startToChargerCost})
            
                // charge += chargeTime
                newNode.path += 'c'.repeat(chargeTime/FUEL_COST)
                console.log({chargeTime})
            }


            newNode.path += startToChargerTrip

            let newNodePrime = astarCharger(
                grid, goal, start_position, {x: charger.x, y: charger.y}, newCharge + chargeTime, startToChargerCost, newNode
            )

            tripNode.children.push(newNodePrime)
        } else {
            newNode.path = -1
            tripNode.children.push(newNode)
        }
    }

    return tripNode
}