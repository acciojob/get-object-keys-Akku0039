//your JS code here. If required.
const student = {
    name: "John"
};
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage:
const keys = student.getKeys();
console.log(keys);
