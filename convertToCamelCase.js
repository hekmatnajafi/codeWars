
function convertToCamelCase(str) {
    if (str === '') return '';
    // replace the - and _ with space
    let plain = str.replace(new RegExp("_", 'g'), " ").replace(new RegExp("-", 'g'), " ").split(" ");
    // save the first string as its original case
    let res = plain[0];
    
    // convert to camel case
    for (let i = 1; i < plain.length; i++) {
        res += plain[i][0].toUpperCase() + plain[i].substring(1, plain[i].length)
    }
    return res;
}

convertToCamelCase("the_stealth_warrior")
convertToCamelCase("The-Stealth-Warrior")
convertToCamelCase("A-B-C")