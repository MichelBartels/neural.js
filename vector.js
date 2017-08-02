function vector(array) {
    this.array = array
    this.dimensions = array.length
}
vector.prototype.show = function () {
    console.table(this.array)
}
vector.prototype.substract = function (to_add) {
    var is_array = Object.prototype.toString.call(to_add) == "[object Array]"
    var is_number = typeof to_add == "number"
    if (!(is_array) && !(to_add instanceof vector) && !(is_number)){
        throw "Can't add object of this type"
    } else {
        if (this.array.length != array.length) {
            console.warn("Length of vector is not the same")
        }
        if (is_number) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] += to_add
            }
        } else {
            for (var i = 0; i < this.array.length; i++) {
                if (to_add[i] != undefined) {
                    this.array[i] += to_add[i]
                }
            }
        }
    }
}
vector.prototype.subtract = function (to_subtract) {
    var is_array = Object.prototype.toString.call(to_subtract) == "[object Array]"
    var is_number = typeof to_subtract == "number"
    if (!(is_array) && !(to_subtract instanceof vector) && !(is_number)){
        throw "Can't subtract object of this type"
    } else {
        if (is_number) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] -= to_subtract
            }
        } else {
            if (this.array.length != to_substract.length) {
                console.warn("Length of vector is not the same")
            }
            for (var i = 0; i < this.array.length; i++) {
                if (to_subtract[i] != undefined) {
                    this.array[i] -= to_subtract[i]
                }
            }
        }
    }
}
vector.prototype.multiply = function (to_multiply) {
    var is_array = Object.prototype.toString.call(to_multiply) == "[object Array]"
    var is_number = typeof to_multiply == "number"
    if (!(is_array) && !(to_subtract instanceof vector) && !(is_number)){
        throw "Can't multiply object of this type"
    } else {
        if (is_number) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] *= to_multiply
            }
        } else {
            if (this.array.length != to_substract.length) {
                throw "Length of vector is not the same"
            } else {
                var sum = 0
                for (var i = 0; i < this.array.length; i++) {
                    sum += this.array[i] * to_multiply[i]
                }
                return sum
            }
        }
    }
}
