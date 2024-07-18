// Quantifizierer: Bestimmen, wie oft das vorherige Element vorkommen darf.

//          * steht für null oder mehr Wiederholungen.
//          + steht für eine oder mehr Wiederholungen.
//          ? steht für null oder eine Wiederholung.
//          {n} steht für genau n Wiederholungen.
//          {n,} steht für mindestens n Wiederholungen.
//          {n,m} steht für mindestens n und höchstens m Wiederholungen.

function checkQuantifiers(inputString) {
  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge ein Wort mit 3 bis 6 Buchstaben enthält
  const wordWithThreeToSixLetters =  [];

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge genau zwei Ziffern enthält
  const exactlyTwoDigits = [];

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge null oder mehr Leerzeichen enthält
  const zeroOrMoreSpaces = [];

  // Überprüfen, ob die Zeichenfolge alle Bedingungen erfüllt
  const wordWithThreeToSixLettersResult =
    wordWithThreeToSixLetters.test(inputString);
  const exactlyTwoDigitsResult = exactlyTwoDigits.test(inputString);
  const zeroOrMoreSpacesResult = zeroOrMoreSpaces.test(inputString);

  // Ergebnisse zurückgeben
  return {
    wordWithThreeToSixLetters: wordWithThreeToSixLettersResult,
    exactlyTwoDigits: exactlyTwoDigitsResult,
    zeroOrMoreSpaces: zeroOrMoreSpacesResult,
  };
}

// Beispiel-Tests
console.log(checkQuantifiers("Hello 42 world!"));
// Ausgabe: { wordWithThreeToSixLetters: true, exactlyTwoDigits: true, zeroOrMoreSpaces: true }

console.log(checkQuantifiers("Hi 12345!"));
// Ausgabe: { wordWithThreeToSixLetters: false, exactlyTwoDigits: false, zeroOrMoreSpaces: true }

console.log(checkQuantifiers("123 45"));
// Ausgabe: { wordWithThreeToSixLetters: false, exactlyTwoDigits: true, zeroOrMoreSpaces: true }

console.log(checkQuantifiers("   "));
// Ausgabe: { wordWithThreeToSixLetters: false, exactlyTwoDigits: false, zeroOrMoreSpaces: true }
