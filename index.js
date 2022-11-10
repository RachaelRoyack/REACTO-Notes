/*
Prompt
You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).
*/

function indexOf(needle, haystack) {
if (needle.length > haystack.length) return -1
  let idxStart = -1
    let textPhrase = ''
   
   for (let i = 0; i < haystack.length; i++){
        let hayIdx = i
    for (let j = 0; j < needle.length; j++) {
        if (haystack[hayIdx] === needle[j]) {
            if (textPhrase === '') {
                idxStart = hayIdx
            }
            textPhrase= textPhrase + haystack[hayIdx]
            if (needle === textPhrase) {
                return idxStart
            }
            hayIdx++
        } else {
            idxStart = -1
            textPhrase = ''
        }
    }
   }

   return idxStart
}

console.log(indexOf("or", "hello world"));  // 7
console.log(indexOf("hello world", "or"));  // -1
console.log(indexOf("howdy", "hello world")); // -1
console.log(indexOf("oox", "ooboxoooxo")); // 6


/*
approach
idxStart variable (-1)
textPhrase variable (empty string) 
loop through haystack
  - nested loop through needle
    - compare each char at hayIdx and needleIdx
    - if they match 
      - if textPhrase is empty assign idxStart to hayIdx
      - add the char to the textPhrase
      - if needle === textPhrase return idxStart
    - else 
      - idxStart reassign to -1
      - textPhrase reassign to empty string
    
return idxStart

*/