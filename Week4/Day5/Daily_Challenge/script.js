if (
  !confirm(
    "Welcome friend today we will check if 2 words you giving are Anagram, would you like to check?"
  )
) {
  alert(" I feel you! Have a nice day");
} else {
  let word1 = prompt("give me you first sentence").toLowerCase();
  let word2 = prompt("give me you second sentence").toLowerCase();

  wordArr1 = word1.replaceAll(" ", "").split("");
  wordArr2 = word2.replaceAll(" ", "").split("");
  wordArr2Copy = [...wordArr2];

  wordArr1.forEach((chr) => wordArr2.splice(wordArr2.indexOf(chr), 1));
  wordArr2Copy.forEach((chr) => wordArr1.splice(wordArr1.indexOf(chr), 1));

  if (wordArr1.length < 1 && wordArr2.length < 1) {
    alert("They are an Anagram!!");
  } else {
    alert("They are not Anagram!!");
  }
}
