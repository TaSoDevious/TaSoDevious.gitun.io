// Monta - script.js
function showFact() {
  const facts = [
    "Elephants can recognize themselves in a mirror.",
    "A bald eagle can spot prey from very far away.",
    "Frogs breathe through their permeable skin and lungs.",
    "Lions work together when they hunt large prey.",
    "Wolves help plants recover by moving deer herds."
  ];

  document.getElementById("fact-box").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}
