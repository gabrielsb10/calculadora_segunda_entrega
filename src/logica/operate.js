export default function operate(number_a,number_b,operation) {
    const a = number_a || "0";
    const b = number_b || (operation === "÷" || operation === 'x' ? "1": "0");
    if (operation === "+") {
        return (parseFloat(a) + parseFloat(b)).toString()
    } 
    if (operation === "-") {
        return (parseFloat(a) - parseFloat(b)).toString()
    }
    if (operation === "x") {
        return (parseFloat(a) * parseFloat(b)).toString()
    }
    if (operation === "÷") {
      if (b === "0") {
        alert("Divide by 0 error");
        return "0";
      } else {
        return (parseFloat(a) / parseFloat(b)).toString()
      }
    }
    throw Error(`Unknown operation '${operation}'`);
  };