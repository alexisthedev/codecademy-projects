// <-- Initializing the _ object -->
const _ = {

    // The .clamp() method, which clamps a number between two set values
      clamp (number, lower, upper) {
        return Math.min(upper, Math.max(number, lower));
      },
    
    
    // The .inRange() method, which returns a boolean value that depends on whether or not the number given is in between two set points, without including the end point
      inRange (number, start=0, end) {
        if (!end) {
          end = start;
          start = 0;
        } else if (start > end) {
          let temp = start;
          start = end;
          end = temp;
        }
    
        if (number >= start && number < end) return true;
        return false;
      },
    
    
    // The .words() method, which splits a given string into an array consisting of its words as elements
      words (string='') {
        return string.split(' ');
      },
    
    
    // The .pad() method, which adds spaces both in the front and in the end of a string when the string has a length smaller than needed.
      pad (string='', length=0) {
        if(string.length >= length) return string;
    
        let newArr = string.split('');
    
        let padNeeded = length - string.length;
        if (padNeeded%2 === 0) {
          for (let i=0; i<padNeeded/2; i++) {
            newArr.push(' ');
            newArr.unshift(' ');
          }
        } else {
          newArr.push(' ');
          padNeeded--;
          for (let i=0; i<padNeeded/2; i++) {
            newArr.push(' ');
            newArr.unshift(' ');
          }
        }
    
        return newArr.join('');
      },
    
    
    // The .has() method checks and returns a boolean value depending on if an object has a value at a possible key.
      has (obj, key) {
        let hasValue = obj.hasOwnProperty(key);
        return hasValue;
      },
    
    
    // The .invert() method inverts the key-value pairs of an object.
      invert (object) {
        const invObj = {};
        for (const key in object) {
          const val = object[key];
          invObj[val] = key;
        }
        return invObj;
      },
    
    
    // .findKey() returns the key of the first element the predicate function returns truthy for.
      findKey (object, predicate) {
        for (const key in object) {
          if(predicate(object[key])) return key;
        }
      },
    
    
    // .drop() drops n elements from the front of the array
      drop (array, n=1) {
        for (let i=0; i<n; i++) {
          array.shift();
        }
        return array;
      },
    
    
    // .dropWhile() drops elements from the front of the array until an element makes predicate return a falsy value
      dropWhile (array, predicate) {
        let newArr = array;
        while (predicate(newArr[0], 0, newArr)) {
          newArr.shift();
        };
        return newArr;
      },
    
    // .chunk() Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
      chunk (array, size=1) {
        let newArr = [];
        let tempArr = [];
        let j = 0;
        if(array.length%size === 0) {
          for (let i=0; i<array.length/size; i++) {
            for (let k=0; k<size; k++) {
              tempArr.push(array[j]);
              j++;
            };
            newArr.push(tempArr);
            tempArr = [];
          };
    
         } else {
           for (let i=0; i<Math.floor(array.length/size); i++) {
             for (let k=0; k<size; k++) {
               tempArr.push(array[j]);
               j++;
             };
             newArr.push(tempArr);
             tempArr = [];
           };
           while (array[j]) {
             tempArr.push(array[j]);
             j++;
           }
           newArr.push(tempArr);
         }
    
         return newArr;
      },
    };
    
    
    // Do not write or modify code below this line.
    module.exports = _;