let re1 = RegExp("ahmed");
let re2 = /ahmed/ ;
let eighteenPlus = /eighteen\+/; // In addition, backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern. Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself.
// ================================================================================================== //
/*      Regular expression objects have a number of methods. The simplest one is
         test. If you pass it a string, it will return a Boolean telling you whether the
         string contains a match of the pattern in the expression.
 */


// ================================================================================================== //
/* 
        Finding out whether a string contains abc could just as well be done with a call
    to indexOf. Regular expressions allow us to express more complicated patterns.
    Say we want to match any number. In a regular expression, putting a set
    of characters between square brackets makes that part of the expression match
    any of the characters between the brackets.
*/

// → true
 // Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, where the ordering is determined by the character’s Unicode number. Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit
// → true

// ================================================================================================== //
/*
        A number of common character groups have their own built-in shortcuts.
    Digits are one of them: \d means the same thing as [0-9].
    \d Any digit character
    \w An alphanumeric character (“word character”)
    \s Any whitespace character (space, tab, newline, and similar)
    \D A character that is not a digit
    \W A nonalphanumeric character
    \S A nonwhitespace character
*/

console.log(/\S/.test("")); 
// ================================================================================================= //
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

// ================================================================================================= //
/* 
    To express that you want to match any
character except the ones in the set—you can write a caret (^) character after
the opening bracket.
 */



// ================================================================================================= //

let cartoonCrying = /^Boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boooooohoooohoohooo"));
// → true
// ================================================================================================= //
// ================================================================================================= //
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said ''"));
// → ["'hello'", "hello"]

// ================================================================================================= //
console.log(new Date(2001,));




// → true
console.log(/[\d.]/.test('.'));

console.log(/[\d.]/.test('548'));
//console.log(/\d.errami/.test('1.errami'));
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true
console.log(/\d+/.test("123"));

console.log(/\d+/.test("123"));
        // → true
        console.log(/\d+/.test(""));
        // → false
        console.log(/\d*/.test("123"));
        // → true
        console.log(/\d*/.test(""));
        // → true

    let match = /\d+/.exec("one two 100");
    console.log(match.index);

    let quotedTextl = /'([^']*)'/;
    console.log(quotedTextl.exec("she said 'hello'"));
    let quotedTextll = /'[^']*'/;
    console.log(quotedTextll.exec("she said 'hello'"));

    let text = "HELLO, LOOK AT YOU LO";
let pattern = /\bLO\b/;
console.log(text.match(pattern));

console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
console.log(new Date(1001282400000));
function getDate(string) {
    let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
    }
    console.log(getDate("08-24-2001"));
    let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
    console.log(animalCount.test("15 pigs"));
    console.log(
        "errami, fadelEllah\nAhmed, errami\nFezzahra, errami"
        .replace(/(\w+), (\w+)/g, "$2 $1"));

