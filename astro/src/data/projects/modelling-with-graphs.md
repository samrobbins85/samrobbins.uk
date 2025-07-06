---
title: "Modelling with Graphs"
slug: "modelling-with-graphs"
description: "A set of algorithms on graphs"
date: 2019-03-08
icon: "mdi:graph"
github: "https://github.com/samrobbins85/CT-Graphs-Coursework"
technologies:
  - "python"
  - "networkx"
---

In this coursework I implemented a range of graph algorithms using Python and NetworkX.

## Basic greedy colouring

This can be found in the file `Part A/greedy_col_basic.py`

This is designed to:

- Visit the vertices of the graph sequentially
- At every step assign in a greedy fashion the smallest possible colour
- Output the constructed colouring and the number of different colours in the colouring

For this I implemented two functions

`find_smallest_color` - Given the graph and a given vertex, return the smallest colour that can be assigned

```python
def find_smallest_color(G,i):
    n = len(G.nodes())
    keys = G.adj[i]
    list = []
    for key in keys:
        list.append(G.nodes[key]['color'])
    color=1
    while color in list:
        color += 1
    return color
```

`greedy` - Actually perform the greedy algorithm

```python
def greedy(G):
    global kmax
    for i in G.nodes():
        G.nodes[i]['color'] = find_smallest_color(G,i)
    kmax = max(G.nodes[i]['color'] for i in G.nodes)

    for i in G.nodes():
        print('vertex', i, ': color', G.node[i]['color'])
    print()
    print('The number of colors that Greedy computed is:', kmax)
```

## Variation on Greedy Colouring

This can be found in the file `Part A/greedy_col_variation.py`

Instead of visiting the nodes sequentially, this should visit the vertices such that the next visited node is adjacent to at least one visited node. Amongst the list of adjacent vertices, the smallest should be chosen. Then the rest of the algorithm will be carried out as before.

For this the function `find_smallest_color` doesn't require any editing, but the function `greedy` is changed to look like this

```python
def greedy(G):
    n = len(G.nodes())
    global kmax
    global visited_counter
    G.nodes[1]['color']=1
    G.nodes[1]['visited']='yes'
    for i in range(1,len(G)):
        next_vertex=find_next_vertex(G)
        G.nodes[next_vertex]['color']=find_smallest_color(G,next_vertex)
        G.nodes[next_vertex]['visited'] = 'yes'
    visited = nx.get_node_attributes(G, 'color')
    kmax=(max([v for k, v in visited.items()]))
    print()
    for i in G.nodes():
        print('vertex', i, ': color', G.node[i]['color'])
    print()
    print('The number of colors that Greedy computed is:', kmax)
    print()
```

This also has the newly implemented function `find_next_vertex` which provides the index of the vertex to choose next

```python
def find_next_vertex(G):
    visited = nx.get_node_attributes(G, 'visited')
    visited=[k for k, v in visited.items() if v=="yes"]
    adjacent=set()
    for item in visited:
        adjacent=adjacent|(set(G.neighbors(item)))
    visited=set()
    for item in adjacent:
        if G.nodes[item]['visited']=='yes':
            visited.add(item)
    adjacent-=visited
    return min(adjacent)
```

## Breadth First Search

This can be found in the file `Part B/breadth_first.py`

This performs a breadth first search from a given node `a` to a given node `b`

This is implemented in just one function

```python
def bfs(G,a,b):
    G.add_nodes_from(G.nodes(), label = -1) # initialization of all labels
    G.node[a]['label'] = 0
    i=0
    while G.node[b]['label']==-1:
        vertex_list=[node for node in G.nodes() if G.node[node]['label']==i]
        for u in vertex_list:
            adjacent=list(G.adj[u])
            for v in adjacent:
                G.node[v]['label']=i+1
        i+=1
    return G.node[b]['label']
```

## Depth first search

This can be found in the file `Part B/depth_first_pair_nodes.py`

This performs a depth first search starting from a given node `a` to a given node `b`

At every step, among the neighbours of the currently visited vertex, the algorithm chooses the smallest one to continue the exploration from it.

In addition, it adds a label to each of the visited vertices with the path length

This is implemented with just one function

```python
def dfs(G,a,b,u):
    if a==u:
        G.node[u]['label']=0
    else:
        G.node[u]['label']=G.node[a]['label']+1
    G.node[u]['visited'] = 'yes'
    print(u)
    if u==b:
        return
    sort_list = list(G.neighbors(u))
    sort_list.sort()
    for v in sort_list:
        if G.node[v]['visited'] == 'no':
            dfs(G,u,b, v)
```

## Diameter

The code for this can be found in the file `Part B/Diameter.py`

The diameter is the greatest distance between any pair of vertices in the input graph. This is implemented with the breadth first algorithm seen before, along with an additional function

```python
def max_distance(G):
    max=0
    nodes=list(G.nodes())
    pairs=[[i,j] for i in nodes for j in nodes]
    for i in pairs:
        distance=bfs(G,i[0],i[1])
        if distance>max:
            max=distance
    return max

```
