

// given a string s, returns all the possible permutation of it.
// ex : 's' -> ['s']
// ex : 'sa' -> ['sa', 'as']


function getPermutations(s) {

    if(s.length===1) {
        return [s];
    }

    var char = s[0];

    var subPermutations = getPermutations(s.substring(1));

    var permutations = [];

    subPermutations.forEach(function(permutation) {
        for(var i=0; i<=permutation.length; i++) {
            permutations.push(permutation.substring(0, i) + char + permutation.substring(i, permutation.length));
        }
    });

    return permutations;
}


console.log(JSON.stringify(getPermutations("salope")));
