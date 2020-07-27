    function sum (val) {
        var temp = val;
        sum = function() {
            var arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return sum();
    }
    
    console.log(sum(3),sum(5),sum(20));

    function makeCounter() {
        var currentCount = 5;
      
        return {
          getNext: function() {
            return currentCount++;
          },
      
          set: function(value) {
            currentCount = value;
          },
      
          reset: function() {
            currentCount = 5;
          }
        };
      }
      
      var counter = makeCounter();
      
      alert( counter.getNext() );
      alert( counter.getNext() );
      
      counter.set(20);
      alert( counter.getNext() );
