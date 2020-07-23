(function () {
    function sum (val) {
        var temp = val;
        sum = function() {
            var arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return sum();
    }
    console.log(sum(3)); 
    console.log(sum(5)); 
    console.log(sum(20)); 
}());

