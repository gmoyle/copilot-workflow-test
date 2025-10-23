// Sample JavaScript file for testing Copilot workflow

function greet(name) {
  const who = name || 'World';
  return `Hello, ${who}!`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return Infinity;
  return a / b;
}

function square(a) {
  return a * a;
}

module.exports = { greet, add, subtract, multiply, divide, square };
