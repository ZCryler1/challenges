function firstUniqueChar(palavra) {
    let resultado = {};
    for (let i = 0; i < palavra.length; i++) {
        resultado[palavra[i]] = (resultado[palavra[i]] || 0) + 1;
    }
    for (let i = 0; i < palavra.length; i++) {
        if (resultado[palavra[i]] === 1) {
            return palavra[i];
        }
    }
    return null;
}


console.log(firstUniqueChar("leetcode")); // Output: 'l'
console.log(firstUniqueChar("loveleetcode")); // Output: 'v'
console.log(firstUniqueChar("aabb")); // Output: null