import operate from "./operate";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      result: ""
    };
  }

  if (buttonName === "MC") {
    return {
      salvo1: null,
      salvo2: null,
      salvo3: null,
      salvo4: null,
    };
  }

  if (buttonName === "MR") {
    if (obj.salvo1 != null) {
      return {
        result: obj.salvo1
      };
    }

    else if (obj.salvo2 != null) {
      return {
        result: obj.salvo2
      };
    }

    else if (obj.salvo3 != null) {
      return {
        result: obj.salvo3
      };
    }

    else if (obj.salvo4 != null) {
      return {
        result: obj.salvo4
      };
    }

    else {
      return {};
    }
  }

  if (buttonName === "M+") {
    if (obj.salvo1 != null) {
      return {
        result: operate(obj.result, obj.salvo1, '+')
      };
    }

    else if (obj.salvo2 != null) {
      return {
        result: operate(obj.result, obj.salvo2, '+')
      };
    }

    else if (obj.salvo3 != null) {
      return {
        result: operate(obj.result, obj.salvo3, '+')
      };
    }

    else if (obj.salvo4 != null) {
      return {
        result: operate(obj.result, obj.salvo4, '+')
      };
    }

    else {
      return {};
    }
  }

  if (buttonName === "MS") {
    if (obj.salvo1 == null || obj.salvo2 == null || obj.salvo3 == null || obj.salvo4 == null) {
      return {
        salvo1: obj.result,
        salvo2: obj.salvo1,
        salvo3: obj.salvo2,
        salvo4: obj.salvo3
      };
    }

    else {
      return {};
    }

  }

  if (buttonName === "MC1") {
    return {
      salvo1: obj.salvo2,
      salvo2: obj.salvo3,
      salvo3: obj.salvo4,
      salvo4: null
    };
  }

  if (buttonName === "MC2") {
    return {
      salvo2: obj.salvo3,
      salvo3: obj.salvo4,
      salvo4: null
    };
  }

  if (buttonName === "MC3") {
    return {
      salvo3: obj.salvo4,
      salvo4: null
    };
  }

  if (buttonName === "MC4") {
    return {
      salvo4: null
    };
  }

  if (buttonName === "MR1") {
    if (obj.salvo1 != null) {
      return {
        result: obj.salvo1
      };
    }

    else {
      return {};
    }
  }

  if (buttonName === "MR2") {
    if (obj.salvo2 != null) {
      return {
        result: obj.salvo2
      };
    }

    else {
      return {};
    }
  }

  if (buttonName === "MR3") {
    if (obj.salvo3 != null) {
      return {
        result: obj.salvo3
      };
    }

    else {
      return {};
    }
  }

  if (buttonName === "MR4") {
    if (obj.salvo4 != null) {
      return {
        result: obj.salvo4
      };
    }

    else {
      return {};
    }
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