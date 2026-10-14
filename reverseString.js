// 将输入字符串反转；空值或非字符串返回空字符串
function reverseString(s) {
  // 校验类型与空串，避免对非法输入做反转
  if (typeof s !== "string" || s === "") {
    // 空输入或非字符串统一返回空字符串
    return "";
  }
  // 拆成字符数组、倒序后再拼接回字符串
  return s.split("").reverse().join("");
}

// 用法示例 1：reverseString("hello") === "olleh"
// 用法示例 2：reverseString(123) === ""

// 在 Node 环境中导出，便于引用
if (typeof module !== "undefined" && module.exports) {
  // 导出 reverseString 供外部模块使用
  module.exports = { reverseString };
}
