# Sorting

Sorting means arranging elements in a specific order, typically in increasing or decreasing order. There are many sorting techniques used to organize elements in an array.

# Bubble Sort

Bubble Sort is one of the simplest sorting algorithms. It's easy to understand and explain.

## Approach: Increasing Order

The basic idea is to repeatedly compare adjacent elements in the array and swap them if they are in the wrong order—specifically, if the left element is larger than the right one. This way, larger elements "bubble" toward the end of the array.

- We repeat this process for all elements, but we can optimize it:

- After each full pass through the array, the largest unsorted element will be in its correct position.

- Therefore, we can reduce the number of comparisons in subsequent passes.

- Additionally, we can check if any swaps occurred during a pass.

- If no swaps happen, it means the array is already sorted, and we can terminate early.

- This makes the algorithm more efficient in cases where the array is already sorted or nearly sorted.

## [Bubble sort implementation](./bubbleSort.js)

![bubble](./images/bubble.png)
