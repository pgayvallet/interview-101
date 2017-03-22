/*
 Given a string of opening and closing parentheses, check whether it’s balanced.
 We have 3 types of parentheses:
    round brackets: (),
    square brackets: [],
    curly brackets: {}.
 Assume that the string doesn’t contain any other character than these, no spaces words or numbers.
 Just to remind, balanced parentheses require every opening parenthesis to be closed in the reverse order opened.
 For example ‘([])’ is balanced but ‘([)]‘ is not.
 */


function checkBalance(str) {

    var stack = []; // no stack in JS but yea, this is a stack data-structure approach

    var map = {
        "(" : ")",
        "{" : '}',
        "[" : ']'
    };

    for(var i=0; i<str.length; i++) {
        var char = str[i];
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if(char !== map[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;

}

console.log("([]) -> " + checkBalance("([])"));
console.log("([)] -> " + checkBalance("([)]"));
console.log("({ -> " + checkBalance("({"));
console.log("()} -> " + checkBalance("()}"));