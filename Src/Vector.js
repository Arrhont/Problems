'use strict';

function Vector(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperties(this, {
        'length' : {
            'get' : function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        }
    });
}

Vector.prototype.plus = function(obj) {
    this.x += obj.x;
    this.y += obj.y;
    return this;
};

Vector.prototype.minus = function(obj) {
    this.x -= obj.x;
    this.y -= obj.y;
    return this;

};

Vector.prototype.length1 = {
    get length1 () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

console.log(new Vector(1, 2));
console.log(new Vector(1, 2).plus(new Vector(1, 2)));

let v1 = new Vector(1, 2);
let v2 = new Vector(3, 4);

console.log(v1.plus(v2));
console.log(v1.length);
console.log(v1.length1);