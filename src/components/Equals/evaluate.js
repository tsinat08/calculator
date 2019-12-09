const splitStringArithmetic = (str) => {
    let index = 0,
        splitArray = str.split("").reduce((arr, v, i) => {
            if (isNaN(parseInt(v))) {
                arr.push(str.slice(index, i));
                arr.push(v);
                index = i + 1;
            }
            return arr;
        }, []);
    splitArray.push(str.slice(index));
    return splitArray;
};

const findOperator = (arr, o) => {
    return arr.findIndex(i => i === o);
};

const arithmetic = (o, a, b) => {
    let arithmeticObject = {
        "*": parseInt(a) * parseInt(b),
        "/": parseInt(a) / parseInt(b),
        "+": parseInt(a) + parseInt(b),
        "-": parseInt(a) - parseInt(b)
    };
    return arithmeticObject[o];
};

const compute = (arr, o) => {
    let index = findOperator(arr, o);
    console.log('here: ', index)
    arr[index] = arithmetic(o, arr[index - 1], arr[index + 1]);
    console.log('here1: ', arr[index])
    return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
    });
};

const containsOperators = (arr) => {
    return arr.some(i => i === "*" || i === "/" || i === "+" || i === "-");
};

const simplify = (arr) => {
    while (containsOperators(arr)) {
        if (arr.includes("*") && arr.includes("/")) {
            if (findOperator(arr, "/") < findOperator(arr, "*")) {
                arr = compute(arr, "/");
            } else {
                arr = compute(arr, "*");
            }
        } else if (arr.includes("*")) {
            arr = compute(arr, "*");
        } else if (arr.includes("/")) {
            arr = compute(arr, "/");
        } else if (arr.includes("+") && arr.includes("-")) {
            if (findOperator(arr, "-") < findOperator(arr, "+")) {
                arr = compute(arr, "-");
            } else {
                arr = compute(arr, "+");
            }
        } else if (arr.includes("+")) {
            arr = compute(arr, "+");
        } else {
            arr = compute(arr, "-");
        }
    }
    return arr;
};

export default (str) => {
    let arithmeticArray = splitStringArithmetic(str);
    return parseInt(simplify(arithmeticArray));
}