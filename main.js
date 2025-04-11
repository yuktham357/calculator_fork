function appendValue(val) {
    document.getElementById("display").value += val;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function calculateResult() {
    const expression = document.getElementById("display").value;
    const result = evaluateExpression(expression);
    document.getElementById("display").value = result;
  }
  
  function evaluateExpression(expr) {
    try {
      const tokens = expr.match(/(\d+|\+|\-|\*|\/)/g);
      if (!tokens) return "";
  
      let result = parseInt(tokens[0]);
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNum = parseInt(tokens[i + 1]);
  
        switch (operator) {
          case "+": result = add(result, nextNum); break;
          case "-": result = subtract(result, nextNum); break;
          case "*": result = multiply(result, nextNum); break;
          case "/": result = divide(result, nextNum); break;
          default: return "Invalid";
        }
      }
      return result;
    } catch {
      return "Error";
    }
  }
  