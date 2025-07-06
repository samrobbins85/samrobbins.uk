---
title: "Conway's Game of Life"
slug: "conways-game-of-life"
description: "Conway's Game of Life implemented in C"
date: 2020-03-02
icon: "ion:dice"
github: "https://github.com/samrobbins85/PP-Coursework"
technologies:
  - "c"
---

For this coursework we were to implement Conway's Game of Life in C. This consists of a DLL and a program that calls the library for key functionality.

## Dynamically Linked Library

This was to implement a range of functions

1. `read_in_file()` reads in the file from the filepointer `infile` and stores the universe in the structure pointed to by `u`. You must use dynamic memory allocation.
2. `write_out_file()` writes the content of the universe pointed to by `u` into the file from the file pointer `outfile`
3. `is_alive` returns 1 if the cell in that column and row is alive and 0 otherwise
4. `will_be_alive()` returns 1 if that cell in that column and row will be alive in the next generation and 0 otherwise, assuming that cells outside the universe are always dead
5. `will_be_alive_torus()` returns 1 if the cell in that column and row will be alive in the next generation and 0 otherwise, assuming a torus topology
6. `evolve()` changes the universe from the current generation to the next generation. It used the function pointed to by the function pointer `rule`
7. `print_statistics()` should calculate the percentage of cells that are alive in the current generation and the average percentage that have been alive in all the generations so far

It also had to support multiple universe structures in memory at the same time

The main challenge of this was to use dynamic memory allocation, whereby the program allocates memory as it is scanning the input file.

## Command line program

The program had to take a range of inputs to pass to the library, they can be seen as follows

- `-i input_filename` to specify that the initial generation of the universe should be read from a file. If this option is not selected, you should let the user type in the input
- `-o output_filename` to specify a file into which the final generation should be output. If this option is not specified, you should output the final generation on the screen
- `-g number_of_generations` to specify the number of new generations for which the game should be run (set to 5 if this option is not given)
- `-s` to print statistics after the final generation has been output
- `-t` to use the torus topology for the rule. If this is not specified, use the rule for the cells outside the universe being permanently dead

## Build system

I also had to create a makefile to compile both the library and command line program using GCC. The output of this was a program and a `.so` library. The makefile also implements `make clean` to remove all the files produced during compilation
