// 反转字符串；空输入或非字符串时返回 ""
function reverseString(s) {
  if (typeof s !== "string" || s === "") return "";
  return s.split("").reverse().join("");
}

// 用法示例
reverseString("hello"); // "olleh"
reverseString(42); // ""
