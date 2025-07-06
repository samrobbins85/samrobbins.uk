---
title: "Error correcting codes"
slug: "error-correcting-codes"
description: "Hamming and Repetition Codes"
date: 2019-02-15
icon: "material-symbols:cell-tower"
github: "https://github.com/samrobbins85/CT-ECC-Coursework"
technologies:
  - "python"
  - "numpy"
---

In this coursework I implemented a range of functions for different methods of error correcting codes

## Hamming codes

### Message

This function takes a vector and converted it to a message that can be used in a hamming code

```python
def message(a):
    if not checkvalid(a):
        return []
    l = len(a)
    r = 2
    while (2 ** r - 2 * r - 1) < l:
        r += 1
    k = 2 ** r - r - 1
    length = list(bin(l)[2:])
    length = [int(x) for x in length]
    length = [0] * (r - len(length)) + length
    end = [0] * (k - r - l)
    return length + a + end
```

### Hamming Encoder

This acts as an encoder for hamming codes

```python
def hammingEncoder(m):
    if not checkvalid(m):
        return []
    l = len(m)
    r = 2
    # Ensuring that the list is of the correct length
    while 2 ** r - r - 1 < l:
        r += 1
    # If not return an empty list
    if 2 ** r - r - 1 != l:
        return []
    # Turn the two lists into numpy arrays so they can be multiplied
    message = np.array(m)
    matrix = np.array(hammingGeneratorMatrix(r))
    # Multiply the message by the hamming generator matrix mod 2 and turn it back to a python list
    return (message.dot(matrix) % 2).tolist()
```

### Hamming decoder

This acts as a decoder for hamming codes

```python
def hammingDecoder(v):
    if not checkvalid(v):
        return []
    r = math.log(len(v) + 1, 2)

    if not r.is_integer():
        return []
    r = int(r)
    matrix = []
    # Create the parity check matrix
    for i in range(1, 2 ** r):
        matrix.append(decimalToVector(i, r))
    # Turn that matrix into a numpy data structure
    matrix = np.matrix(matrix)
    a = np.matrix(v)
    # Multiply the message by the parity check matrix mod 2
    # The line below this has errors when using test_up_to, errors on 2
    number = (a.dot(matrix) % 2).tolist()[0]
    # Convert the list representing a number to the actual number
    number = int("".join(str(x) for x in number), 2)
    if number==0:
        return v
    # Flip the bit in the message corresponding to number
    v[number - 1] = int(not v[number - 1])
    return v
```

### Message from codeword

This recovers the message from the codeword of a Hamming code

```python
def messageFromCodeword(c):
    if not checkvalid(c):
        return []
    r = 0
    l = len(c)
    count = 0
    # Ensure the message is of length 2^r-r-1
    while 2 ** r - 1 < l:
        r += 1
    # If it is not of correct length, return an empty list
    if 2 ** r - 1 != l:
        return []
    for i in range(0, r):
        # Removing indices corresponding to powers of 2
        c.pop(2 ** i - 1 - count)
        count += 1
    return c
```

## Repetition Codes

### Repetition Encoder

This creates a repetition code

```python
def repetitionEncoder(m, n):
    return m * n if m == [1] or m == [0] else []
```

### Repetition Decoder

This recovers the message from a repetition code

```python
def repetitionDecoder(v):
    return [0] if v.count(0) > v.count(1) else [1] if v.count(0) < v.count(1) else []
```
