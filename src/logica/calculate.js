import operate from "./operate";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      result: ""
    };
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (buttonName === "0" && obj.result === "0") {
      return {};
    }
    if (obj.operation) {
      if (obj.result) {
        return { result: obj.result + buttonName };
      }
      return { result: buttonName };
    }

    if (obj.result) {
      const result = obj.result === "0" ? buttonName : obj.result + buttonName;
      return {
        result,
        anterior: null,
      };
    }
    return {
      result: buttonName,
      anterior: null,
    };
  }

  if (buttonName === ".") {
    if (obj.result) {
      if (obj.result.includes(".")) {
        return {};
      }
      return { result: obj.result + "." };
    }
    return { result: "0." };
  }

  if (buttonName === "=") {
    if (obj.result && obj.operation) {
      return {
        anterior: null,
        result: operate(obj.anterior, obj.result, obj.operation),
        operation: null,
      };
    } else {
      return {};
    }
  }


  if (obj.operation) {
    return {
      anterior: operate(obj.anterior, obj.result, obj.operation),
      result: null,
      operation: buttonName,
    };
  }

  if (!obj.result) {
    return { operation: buttonName };
  }

  return {
    anterior: obj.result,
    result: null,
    operation: buttonName,
  };
}