// Metazeichen: Zeichen mit einer speziellen Bedeutung.

//    . steht für jedes einzelne Zeichen außer einem Zeilenumbruch.
//    ^ steht für den Anfang einer Zeile.
//    $ steht für das Ende einer Zeile.

function checkPatterns(inputString) {
  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge mit einem Großbuchstaben beginnt
  const startsWithCapital = /^[A-Z]/;

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge genau drei Ziffern hintereinander enthält
  const containsThreeDigits = /\d{3}/;

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge mit einem Punkt endet
  const endsWithPeriod = /\.$/;

  // Überprüfen, ob die Zeichenfolge alle Bedingungen erfüllt
  const startsWithCapitalResult = startsWithCapital.test(inputString);
  const containsThreeDigitsResult = containsThreeDigits.test(inputString);
  const endsWithPeriodResult = endsWithPeriod.test(inputString);

  // Ergebnisse zurückgeben
  return {
    startsWithCapital: startsWithCapitalResult,
    containsThreeDigits: containsThreeDigitsResult,
    endsWithPeriod: endsWithPeriodResult,
  };
}

// Beispiel-Tests
console.log(checkPatterns("Hello123."));
// Ausgabe: { startsWithCapital: true, containsThreeDigits: true, endsWithPeriod: true }

console.log(checkPatterns("hello123."));
// Ausgabe: { startsWithCapital: false, containsThreeDigits: true, endsWithPeriod: true }

console.log(checkPatterns("Hello12."));
// Ausgabe: { startsWithCapital: true, containsThreeDigits: false, endsWithPeriod: true }

console.log(checkPatterns("Hello123"));
// Ausgabe: { startsWithCapital: true, containsThreeDigits: true, endsWithPeriod: false }
