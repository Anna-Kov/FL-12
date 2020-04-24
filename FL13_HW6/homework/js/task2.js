let word = prompt(`Enter a word:`, `example:banana`);
let len = word.length, a = 2;
let m = Math.floor(len / a);
if (len !== '' && len !== 0) {
    if (len % a !== 0) {
        alert(`For user input: "${word}" should return "${word[m]}" `);
    } else {
        alert(`For user input:"${word}" should return "${word[m - 1] + word[m]}"`);
    }
} else {
    alert(`Invalid value`);
}
