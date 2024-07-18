// Reguläre Ausdrücke (englisch: regular expressions, abgekürzt RegEx) sind Muster, die in Texten gesucht werden können,
// um bestimmte Zeichenfolgen zu identifizieren oder zu manipulieren. Sie werden in der Informatik und Textverarbeitung häufig verwendet,
// um Textmuster zu finden, zu überprüfen oder zu ersetzen. Reguläre Ausdrücke sind sehr mächtig und flexibel, können aber auch komplex sein.

// `a.b` findet 'a' gefolgt von einem beliebigen Zeichen und dann 'b', also z.B. 'acb', 'a.b', 'a1b'.
// `^Hello` findet 'Hello' nur, wenn es am Anfang einer Zeile steht.
// `world$` findet 'world' nur, wenn es am Ende einer Zeile steht.
// `\d{3}` findet genau drei Ziffern hintereinander.
// `(cat|dog)` findet entweder 'cat' oder 'dog'.



// Zeichenklassen: Eine Gruppe von Zeichen, die in einer Position im Text stehen können.

//      [abc] steht für 'a', 'b' oder 'c'.
//      [a-z] steht für jedes kleine lateinische Zeichen.
//      [0-9] steht für jede Ziffer.

function findCharacterClasses(inputString) {
  // Regulärer Ausdruck zur Suche nach Kleinbuchstaben, Großbuchstaben, Ziffern und Sonderzeichen
  const regex = [];

  // Alle Vorkommen der Zeichenklassen in einem Array speichern
  const matches = inputString.match(regex);

  // Ergebnis zurückgeben
  if (matches) {
    return `Gefundene Zeichen: ${matches.join(", ")}`;
  } else {
    return "Keine passenden Zeichen gefunden.";
  }
}

// Beispiel-Tests
console.log(findCharacterClasses("Hallo123!")); // Ausgabe: Gefundene Zeichen: H, a, l, l, o, 1, 2, 3, !
console.log(findCharacterClasses("Passwort#2024")); // Ausgabe: Gefundene Zeichen: P, a, s, s, w, o, r, t, #, 2, 0, 2, 4
console.log(findCharacterClasses("keine passenden zeichen")); // Ausgabe: Gefundene Zeichen: k, e, i, n, e, p, a, s, s, e, n, d, e, n, z, e, i, c, h, e, n
console.log(findCharacterClasses("!@#$%")); // Ausgabe: Gefundene Zeichen: !, @, #, $, %
console.log(findCharacterClasses("_____")); // Ausgabe: Keine passenden Zeichen gefunden.
