const str = "Today is a nice day!";
console.log(str.length); // 20
console.log(str[2]); // "d"
console.log(typeof str); // "string"
console.log(typeof str[2]); // "string"
console.log(typeof String(5)); // "string"
console.log(typeof new String(str)); // "object"
console.log(str.indexOf("is")); // 6
console.log(str.indexOf("today")); // -1
console.log(str.includes("is")); // true
console.log(str.includes("IS")); // false
console.log(str.startsWith("Today")); // true
console.log(str.endsWith("day")); // false
console.log(str.split(" ")); // ["Today", "is", "a", "nice", "day!"]
console.log(str.split("")); // ["T", "o", "d", "a", "y", " ", "i", "s", " ", "a", " ", "n", "i", "c", "e", " ", "d", "a", "y", "!"]
console.log(str.split("a")); // ["Tod", "y is ", " nice d", "y!"]
console.log(str + 1 + 2); // "Today is a nice day!12"
console.log(str + str); // "Today is a nice day!Today is a nice day!"
console.log(str.concat(str)); // "Today is a nice day!Today is a nice day!"
console.log(str.repeat(2)); // "Today is a nice day!Today is a nice day!"
console.log(str.at(0)); // "T"
console.log(str.at(19)); // "!"
console.log(str.at(20)); // undefined
console.log(str.at(-1)); // "!"
console.log(str.at(-20)); // "T"
console.log(str.at(-21)); // undefined
console.log("abc" < "bcd"); // true
console.log("abc".localeCompare("bcd")); // -1
console.log("a".localeCompare("A")); // -1
console.log("a".localeCompare("A", "en", { numeric: true })); // -1
console.log("a".localeCompare("A", undefined, { sensitivity: "accent" })); // 0
console.log("a".localeCompare("A", undefined, { sensitivity: "base" })); // 0
console.log(
  "a".localeCompare("A!", undefined, {
    sensitivity: "base",
    ignorePunctuation: true,
  })
); // 0
console.log("abc".toLocaleUpperCase()); // "ABC"
console.log(str.padStart(25, "*")); // "*****Today is a nice day!"
console.log(str.padEnd(22, "!")); // "Today is a nice day!!!"
console.log("   middle  ".trim().length); // 6
console.log("   middle  ".trimStart().length); // 8
console.log("   middle  ".trimEnd().length); // 9
console.log(str.slice(6, 8)); // "is"
console.log(str.slice(-4)); // "day!"
console.log(str.substring(6, 8)); // "is"
console.log(str.substring(-4)); // "Today is a nice day!"
console.log("a".charCodeAt()); // 97
console.log(String.fromCharCode(97)); // "a"
console.log(str.search(/[a-c]/)); // 3
console.log(str.match(/[a-c]/g)); // ["a", "a", "c", "a"]
console.log([...str.matchAll(/[a-c]/g)]);
// [Array(1), Array(1), Array(1), Array(1)]
// 0: ["a", index: 3, input: "Today is a nice day!", groups: undefined]
// 1: ["a", index: 9, input: "Today is a nice day!", groups: undefined]
// 2: ["c", index: 13, input: "Today is a nice day!", groups: undefined]
// 3: ["a", index: 17, input: "Today is a nice day!", groups: undefined]
console.log([..."test1test2".matchAll(/t(e)(st(\d?))/g)]);
// [Array(4), Array(4)]
// 0: (4) ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
// 1: (4) ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
console.log(parseInt("A", 10)); // NaN
console.log(parseInt("A", 16)); // 10
console.log(parseInt("A", 36)); // 10
console.log(parseInt("a", 36)); // 10
console.log(parseInt("x", 36)); // 33
console.log(parseInt("y", 36)); // 34
console.log(parseInt("z", 36)); // 35
console.log(Number(10).toString(10)); // 10
console.log(Number(10).toString(16)); // a
console.log(Number(10).toString(36)); // a
console.log(Number(35).toString(36)); // z
console.log(Number(15).toString(2)); // 1111
console.log((0xf).toString(2)); // 1111
