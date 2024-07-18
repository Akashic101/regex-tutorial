// Gruppierung und Alternativen: Ermöglichen komplexere Muster.

//             () gruppiert Teile des Ausdrucks.
//             | steht für eine logische Oder-Verknüpfung.

function checkGroupingAndAlternatives(inputString) {
  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge "cat", "dog" oder "bird" enthält
  const containsAnimal =  [];

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge "abc" oder "xyz" enthält, gefolgt von einer Ziffer
  const containsAbcOrXyzWithDigit =  [];

  // Regulärer Ausdruck, der überprüft, ob die Zeichenfolge mit einem Großbuchstaben beginnt, gefolgt von Kleinbuchstaben oder Ziffern, und mit einem Punkt endet
  const startsWithCapitalAndEndsWithPeriod =  [];

  // Überprüfen, ob die Zeichenfolge alle Bedingungen erfüllt
  const containsAnimalResult = containsAnimal.test(inputString);
  const containsAbcOrXyzWithDigitResult =
    containsAbcOrXyzWithDigit.test(inputString);
  const startsWithCapitalAndEndsWithPeriodResult =
    startsWithCapitalAndEndsWithPeriod.test(inputString);

  // Ergebnisse zurückgeben
  return {
    containsAnimal: containsAnimalResult,
    containsAbcOrXyzWithDigit: containsAbcOrXyzWithDigitResult,
    startsWithCapitalAndEndsWithPeriod:
      startsWithCapitalAndEndsWithPeriodResult,
  };
}

// Beispiel-Tests
console.log(checkGroupingAndAlternatives("I have a cat."));
// Ausgabe: { containsAnimal: true, containsAbcOrXyzWithDigit: false, startsWithCapitalAndEndsWithPeriod: false }

console.log(checkGroupingAndAlternatives("xyz5 is a code."));
// Ausgabe: { containsAnimal: false, containsAbcOrXyzWithDigit: true, startsWithCapitalAndEndsWithPeriod: false }

console.log(checkGroupingAndAlternatives("Hello1."));
// Ausgabe: { containsAnimal: false, containsAbcOrXyzWithDigit: false, startsWithCapitalAndEndsWithPeriod: true }

console.log(checkGroupingAndAlternatives("A bird can fly."));
// Ausgabe: { containsAnimal: true, containsAbcOrXyzWithDigit: false, startsWithCapitalAndEndsWithPeriod: false }

console.log(checkGroupingAndAlternatives("abc9 is not xyz0."));
// Ausgabe: { containsAnimal: false, containsAbcOrXyzWithDigit: true, startsWithCapitalAndEndsWithPeriod: false }
