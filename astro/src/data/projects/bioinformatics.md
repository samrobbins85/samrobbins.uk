---
title: "Bioinformatics"
slug: "bioinformatics"
description: "A range of algorithms relating to Bioinformatics"
date: 2019-05-02
icon: "mdi:dna"
github: "https://github.com/samrobbins85/CT-Bioinformatics-Coursework"
technologies:
  - "python"
  - "numpy"
  - "networkx"
---

## DNA Alignment

This takes two DNA sequences and produces the optimal alignment. This is done by filling out a backtracking matrix.

This has a simple piece of driver code which loops through all the cells of the backtrack matrix

```python
for a in range(1,len(seq1)+1):
    for b in range(1,len(seq2)+1):
        fill_cell(m,backtrack,seq1,seq2,a,b)
```

The `fill_cell` function then determines the entry in the backtracking matrix and the maximum score of a matching

```python
def fill_cell(m,backtrack,seq1,seq2,a,b):
    # Here m is the matrix and [b,a] is the location of the cell to fill out
    # Diagonal
    max=score(a,b,seq1,seq2)+m[b-1,a-1]
    pos='D'
    # Up
    temp=m[b-1,a]-2
    if temp>max:
        max=temp
        pos='U'
    # Left
    temp=m[b,a-1]-2
    if temp>max:
        max=temp
        pos='L'
    m[b,a]=max
    backtrack[b,a]=pos
    return
```

The rules for scoring were given in the assignment, and are implemented using the `score` function

```python
def score(a,b,seq1,seq2):
    # This function finds the score of the matching
    index_a=a-1
    index_b=b-1
    if seq1[index_a]==seq2[index_b]:
        if seq1[index_a]=='A':
            return 4
        if seq1[index_a]=='C':
            return 3
        if seq1[index_a]=='G':
            return 2
        if seq1[index_a]=='T':
            return 1
        else:
            print(str(seq1[index_a])+str(seq2[index_b])+str(index_a)+str(index_b))
    else:
        return -3
```

The best alignment is then generated using the following function by moving through the backtracking matrix

```python
def gen_seq(backtrack,str1,str2):
    coord=(len(str2),len(str1))
    matchstring1=''
    matchstring2=''
    while coord!=(0,0):
        if backtrack[coord]=='D':
            coord=(coord[0]-1,coord[1]-1)
            matchstring1=matchstring1+str1[-1]
            str1=str1[:-1]
            matchstring2 = matchstring2 + str2[-1]
            str2 = str2[:-1]
        if backtrack[coord]=='U':
            coord=(coord[0]-1,coord[1])
            matchstring1 = matchstring1 + '-'
            matchstring2 = matchstring2 + str2[-1]
            str2 = str2[:-1]
        if backtrack[coord]=='L':
                coord=(coord[0],coord[1]-1)
                matchstring1 = matchstring1 + str1[-1]
                str1 = str1[:-1]
                matchstring2 = matchstring2 + '-'
    matchstring1=matchstring1[::-1]
    matchstring2 = matchstring2[::-1]
    return [matchstring1,matchstring2]
```

### Drawing a phylogenetic tree

This task is to generate a phylogenetic tree based on an input distance matrix

For brevity I have removed the code which formats the input from the file so that it can be worked on along with the code to output the tree.

```python
def WPGMA(filename):
	while table.shape != (2, 2):
		# Find the minimum value
		minval = np.min(table[np.nonzero(table)])
		# Find its coordinates
		itemindex = np.where(table == minval)
		# Merge the two species corresponding to those coordinates
		table = mergespecies(table, itemindex[0][0], itemindex[0][1], names, names2)
		nametable=[str(name) for name in names2]
		stack1=np.array(nametable)
		stacktotal=np.vstack((stack1,table))
		print(stacktotal)
```

And the function to merge species is as follows:

```python
def mergespecies(table, a, b, names, names2):
	depth = lambda L: (isinstance(L, list) and (max(map(depth, L)) + 1) if L else 1) or 0
	if depth(names[a])<depth(names[b]):
		names[a],names[b]=names[b],names[a]
	# print("Merge:" + str(names[a]) + " and " + str(names[b]))
	graphmerge(names[a],names[b])
	names2[a]=names2[a]+names2[b]
	names2.remove(names2[b])
	sublist = [names[a], names[b]]
	names.remove(names[b])
	names.remove(names[a])
	names.insert(a, sublist)
	column1 = table[:, a:a + 1]
	column2 = table[:, b:b + 1]
	# Combine the two columns
	combine = np.hstack((column1, column2))
	# Get the mean of all the rows
	combine = combine.reshape(-1, 2).mean(axis=1).reshape(combine.shape[0], -1)
	# Delete the rows corresponding to the two species
	combine = np.delete(combine, [a, b], 0)
	# Delete the rows/columns corresponding to the two species from the main table
	table = np.delete(table, [a, b], 0)
	table = np.delete(table, [a, b], 1)
	# Append the amended column to the main table
	combine = np.transpose(combine)
	table = np.insert(table, min(a, b), combine, axis=1)
	# Add a zero the the column and transpose it
	combine = np.insert(combine, min(a, b), [0], axis=1)
	# Add this row to the bottom of the main table
	table = np.insert(table, min(a, b), combine, axis=0)
	# Return the table back to the main function
	return table
```
