function vector(array) {
    this.array = array
    this.dimensions = array.length
}
vector.prototype.show = function () {
    console.table(this.array)
}
vector.prototype.substract = function (array) {
    var is_array = Object.prototype.toString.call(array) == "[object Array]"
    var is_number = typeof array == "number"
    if (!(is_array) && !(array instanceof vector) && !(is_number)){
        throw "Can't add object of this type"
    } else {
        if (this.array.length != array.length) {
            console.warn("Length of array is not the same")
        }
        if (is_number) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] += array
            }
        } else {
            for (var i = 0; i < this.array.length; i++) {
                if (array[i] != undefined) {
                    this.array[i] += array[i]
                }
            }
        }
    }
}
vector.prototype.substract = function (array) {
    var is_array = Object.prototype.toString.call(array) == "[object Array]"
    var is_number = typeof array == "number"
    if (!(is_array) && !(array instanceof vector) && !(is_number)){
        throw "Can't add object of this type"
    } else {
        if (this.array.length != array.length) {
            console.warn("Length of array is not the same")
        }
        if (is_number) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] -= array
            }
        } else {
            for (var i = 0; i < this.array.length; i++) {
                if (array[i] != undefined) {
                    this.array[i] -= array[i]
                }
            }
        }
    }
}
