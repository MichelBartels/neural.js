function vector(array) {
    this.array = array
    this.dimensions = array.length
}
vector.prototype.show = function () {
    console.table(this.array)
}
vector.prototype.add = function (array) {
    if (Object.prototype.toString.call(array) != "array" && !(array instanceof vector)){
        throw "Can't add object of this type"
    } else {
        if (this.array.length != array.length) {
            console.warn("Length of array is not the same")
        }
        for (var i = 0; i < this.array.length; i++) {
            if (array[i] != undefined) {
                this.array[i] += array[i]
            }
        }
    }
}
vector.prototype.substract = function (array) {
    if (Object.prototype.toString.call(array) != "array" && !(array instanceof vector)){
        throw "Can't add object of this type"
    } else {
        if (this.array.length != array.length) {
            console.warn("Length of array is not the same")
        }
        for (var i = 0; i < this.array.length; i++) {
            if (array[i] != undefined) {
                this.array[i] -= array[i]
            }
        }
    }
}
