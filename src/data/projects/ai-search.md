---
title: "Travelling Salesman Algorithms"
slug: "travelling-salesman-algorithms"
description: "Algorithms to approximate the travelling salesman problem"
date: 2020-01-20
icon: "material-symbols:directions-car"
github: "https://github.com/samrobbins85/SM-AI_Search-Coursework"
technologies:
  - "python"
  - "numpy"
---

For this project we were to implement two algorithms for solving the travelling salesman problem.

I decided to implement Christofides algorithm and a Greedy Algorithm.

## Greedy algorithm

The basic greedy algorithm selects the next node with the lowest cost. However I enhanced this as there was indecision when there were multiple minimums to choose from as it couldn't be determined which was best.

To solve this problem, my enhanced code looked ahead at what the cost would be of choosing the different choices, and chose the one that gave the lowest cost

This was implemented using the following functions

```python
def test_next_step(tour2,depth):
    # Doing the whole rest of the sequence takes waaaay too much time
    # But also I really wanna get something cool working
    # What about limiting the level of recursion
    # Keep some counter
    tour=tour2[:]
    total_distance=0
    while len(tour)<len(distance_matrix[0]):
        first_node=distance_matrix[tour[-1]][:]
        for i in tour:
            first_node[i]=infinity
        minimum=min(first_node)

        indices = [i for i, x in enumerate(first_node) if x == minimum]
        if len(indices)>1 and depth<2:
            minimum_index=index_decision(indices,tour,depth)
        else:
            minimum_index=indices[0]
        tour.append(minimum_index)
        total_distance=total_distance+minimum
    return [total_distance,tour]


def index_decision(indices,tour,depth):
    shortest_distance=infinity
    minimum_index=0
    for i in indices:
        new_tour=tour+[i]
        # print(i)
        distance=test_next_step(new_tour,depth+1)[0]
        if distance<shortest_distance:
            shortest_distance=distance
            minimum_index=i
    return minimum_index
```

Note the depth is considered here, this is to avoid too many levels of recursion as within one decision there are further decisions that could be made. Considering all of these would have a very large performance impact

## Christofides algorithm

Christofides algorithm works by creating a Minimum Spanning Tree of the graph, then finding a minimum weight matching of the nodes with an even number of vertices. This matching is then combined with the original minimum spanning tree to form a multigraph where every vertex has an even degree. Then a Eulerian circuit is formed from this multigraph and finally converted into a Hamiltonian circuit by skipping repeated vertices.

While all of these steps are complicated, they are much easier than the NP problem of TSP.

I performed an enhancement on this in the final step of skipping repeated vertices as there is a choice of which one to remove. I compared the impact of skipping the different ones had on the tour and chose the best one.

## Performance

In all but one of the hidden files tested on, my enhancement yielded a better result. In the one that didn't it matched the length.
