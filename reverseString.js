// Returns the reversed string, or "" for empty or non-string input.
function reverseString(s) {
  if (typeof s !== "string" || s.length === 0) {
    return "";
  }
  return s.split("").reverse().join("");
}

// reverseString("abc")  => "cba"
// reverseString(42)     => ""

module.exports = { reverseString };
