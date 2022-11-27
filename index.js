// write a binary search algorithm
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
};

/** explain the binary search algorithm */

/**binary search is a search algorithm that finds the position of a target value within a sorted array. binary search compares the target value to the middle element of the array. 
 if they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, 
 and repeating this until the target value is found. if the search ends with the remaining half being empty, the target is not in the array.
 */

/** RESULT (code explained with GitHub Copilot Labs)
Here is the explanation for the code above:
1. We define the function binarySearch which takes in two arguments, an array and a target number.
2. We create three variables, left, right and middle. We set left to 0 and right to the length of the array minus 1. We set middle to the middle index of the array.
3. We create a while loop that runs as long as the middle number in the array doesn't equal the target and left is less than or equal to right.
4. We create an if statement that checks if the target is less than the middle number. If so, we set right to the middle index minus 1.
5. We create an else statement that sets left to the middle index plus 1.
6. We set the middle variable to the middle index of the array again.
7. We return the middle variable which is the index of the target in the array. 
**/
