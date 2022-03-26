/*

1. Perform A* from start to goal
2. If path_cost < current charge
    astar_charger()

    a. manhattan distance from start to all chargers
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