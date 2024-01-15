function palindrome(string){
    const lowerCase = string.toLowerCase();
    const toPalindrome = lowerCase.split('').reverse().join('');
    if (lowerCase === toPalindrome) {
        return "Kata " + string + " adalah palindrome (TRUE)"
    }
    return "\nKata " + string + " BUKAN palindrome (FALSE)"
}

const yes = "malam"
const no = "pagi"

console.log(palindrome(yes), palindrome(no))
