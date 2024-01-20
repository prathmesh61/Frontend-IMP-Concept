let str = "hello";

function reverseStringWithoutInbuilt(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseStringWithoutInbuilt(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

// Javascript program to find longest common prefix of
// given array of words.

function longestCommonPrefix(a) {
  let size = a.length;

  /* if size is 0, return empty string */
  if (size == 0) return "";

  if (size == 1) return a[0];

  /* sort the array of strings */
  a.sort();

  /* find the minimum length from first and last string */
  let end = Math.min(a[0].length, a[size - 1].length);

  /* find the common prefix between the first and
		last string */
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
}

/* Driver Function to test other function */
let input = ["geeksforgeeks", "geeks", "geek", "geezer"];
document.write("The longest Common Prefix is : " + longestCommonPrefix(input));

// This code is contributed by rag2127
