## LEGEND
dark blue - start
cyan - end

red - regular charger
orange - super charger

----


## heuristic function ideas

ignore road blocks -> manhattan distance (diff in x, y)

1. heuristic to get to end goal
    - not enough charge then use 2nd heuristic

2. heuristic to get to charger
    - decide which charger
    - 


----

while not goal:
1. determine lowest cost to goal -> cost = 10 moves
                                    charge = 8 moves
    - perform A* search using h_1(n)  => [u, l, d, r, ...] -> path cost??
    - calculate path cost (ex. 10 moves)
    - if path cost > charge -> step 2

2. if not enough charge:  charge # ^ d -> a* searches
    - perform A* search on chargers using h_1(n)
    - record path costs to each charger
    - if path cost <= current moves (charge)
        - h_2(n) = charger to goal + amount of time @ charger
    - if empty no solution

    choose the smallest h_2(n) value

end return array of moves to do
= [moves]

h_1(n) = |x1 - x2| + |y1 - y2|  -> used for finding goal (end goal/charger)

h_2(n) = |x1 - x2| + |y1 - y2| + <factor takes into account the actual charger>

(path cost, h(n))


--- 

## SUBGOALS

1. implement iterative A* for finding path to a goal
    - `plan_trip()`
    - representation of grid
    - no chargers
    - lowkey first assignment

2. add chargers & battery
    - charges to 100%
    - add heuristics for this

3. generate road algorithm (recursive backtracking)

4. dynamic charge time****

5. visualize with react

---

## Coding time

3 classes
- node
- problem
- solution








0 = road
1 = building
2 = pos of car
3 = goal

[2,0,0,0,0],
[0,1,1,1,0],
[0,1,1,1,0],
[0,0,0,0,3],

Node 0 = pos={x:0,y:0}
Node g = pos={x:4,y:3}

[0,2,0,0,0],
[0,1,1,1,0],
[0,1,1,1,0],
[0,0,0,0,3],

Node 1 = {x:1,y:0}