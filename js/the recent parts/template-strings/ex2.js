function upper(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i-1] == 'string') {
        str += values[i - 1].toUpperCase();
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

function upper2(strings, ...values) {
  var s = '';
  for (var i = 0; i < strings.length; i++){
    if (i > 0) {
      s += String(values[i - 1]).toUpperCase();
    }
    s += strings[i];
  }
  return s;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper2`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
