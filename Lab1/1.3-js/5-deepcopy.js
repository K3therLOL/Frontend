function arraycopy(arr) {
    let copy = [];
    for (value of arr) {
        if (typeof value !== null && Array.isArray(value)) {
            copy.push(arraycopy(value));
        } else if (typeof value !== null && typeof value === "object") {
            copy.push(deepcopy(value));
        } else {
            copy.push(value);
        }
    }
    return copy;
}

function deepcopy(obj) {
    let copy = Object.create(obj);
    let entries = Object.entries(obj);
    for (entry of entries) {
        let key = entry[0], value = entry[1];
        if (typeof value !== null && Array.isArray(value)) {
            copy[key] = arraycopy(value);
        } else if (typeof value !== null && typeof value === "object") {
            copy[key] = deepcopy(value);
        } else {
            copy[key] = value;
        }
    }
    return copy;
}

const base = {
    str: "name",
    int: 3,
    obj: {
        substr: "subname",
        subint: 4,
        subarr: [1, 2, 3, [5, 6], 7],
        subobj: {
            subsubint: 5,
        },
    },
};
alert(JSON.stringify(base, null, 4));
let derived = deepcopy(base);
alert(JSON.stringify(derived, null, 4));
derived.obj.substr = "changed";
derived.obj.subint = 0;
derived.obj.subobj.subsubint = 6;
alert(JSON.stringify(base, null, 4));
alert(JSON.stringify(derived, null, 4));
