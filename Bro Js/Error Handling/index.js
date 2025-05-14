


try {
    console.log(x);

} catch (error) {
    console.log(error);
} finally {
    console.log("This is always execute");
}

try {
    const dividend = Number(window.prompt("Enter the dividend: "));
    const divisor = Number(window.prompt("Enter the divisor: "));
    if (divisor == 0) {
        throw new Error("The divisor must be different from zero");
    }

    if (isNaN(divisor) || isNaN(dividend)) {
        throw new Error("the input values must be numbers");
        
    }
    const result = dividend /divisor;
    console.log(result);
} catch (error) {
    console.log(error);
}
