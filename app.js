const app = {

  palindrome: () => {

        // isPalindrome Built-in Function

        function checkPalindrome(string) {

        let isPalindrome = false;

        let str = string.replace(/ /g, ''); // remove spacing

        // console.log(str)

        // let arrayValues = str.split('')
        // let reverseArrayValues = arrayValues.reverse();
        // let reverseString = reverseArrayValues.join('');

        // shortcut
        let reverseString = str.split('').reverse().join('')

        if(str == reverseString) {
          isPalindrome = true;
        }

        return isPalindrome;

        }

        // console.log(checkPalindrome('12321'))


        // ------------------------------

        function isPalindrome(str) {

        let len = str.length;
        //  console.log({len})

        for (let i = 0; i < len / 2; i++) {

          console.log(i)
          console.log('str[i]',str[i])

          console.log(len - 1 - i)
          console.log('str[len - 1 - i]',str[len - 1 - i])

          console.log('------')


          if (str[i] !== str[len - 1 - i]) {
              return false;
          }

        }

        return true;

        }

        // console.log(isPalindrome("aabbbaa")); // true
        // console.log(isPalindrome("123"));     // false
        // console.log(isPalindrome("1"));       // true
        // console.log(isPalindrome("123321"));  // true
        // console.log(isPalindrome("12321"));  // true


  },
  // end palindrome

  removeDuplicate: () => {

    const input = [3,1, 2, 3, 3, 3, 4, 4, 10, 13, 15, 15, 17];

    function removeDup(arr) {
        const output = [];
        let x = 0;
        const tmp = {};

        for (let i = 0; i < arr.length; i++) {
          // console.log(!tmp[arr[i]])
          // console.log([arr[i]])

          if (!tmp[arr[i]]) { // ! = not on array list = true

                tmp[arr[i]] = true;

                console.log(tmp)
                // console.log(tmp[arr[i]])
                // console.log(arr[i])

                output[x] = arr[i];
                console.log(output)

                x++;
            }
        }

        return output;
    }

    let res = removeDup(input)

    console.log(res);

  },
  //end remove duplicate

  getHighestPrime: function(){

    function getHighestPrime(n) {

    let e = {}

    let hp;

    for(let i = 2; i <= n; i ++) {
        // console.log(e)
        // console.log({i})
        if(!e[i]){ // check if exist, IF NOT THEN LOOP, IF EXIST THEN PROCEED TO NEXT LOOP
            hp = i;
            console.log(e[i])
            console.log({hp})
            for (let j = i; j <= n; j += i){
                console.log({j})
                e[j] = true
                console.log('e',e)
                console.log('j+i', j+i)



            }
        }
    }

    return hp

    }

    console.log(getHighestPrime(6))
    console.log(getHighestPrime(4))
    console.log(getHighestPrime(5))
    console.log(getHighestPrime(6))
    console.log(getHighestPrime(9))


  },
  // end highest prime

  isAlt: function() {

    function isAlt(str) {

      let v = ['a', 'e' , 'i' , 'o', 'u']

      for(i = 0; i < str.length - 1 ; i++) {

        if(v.includes(str[i]) == v.includes(str[i+1])){
          return false;
        }

      }
      return true

    }


    console.log(isAlt('appple'))
    console.log(isAlt('banana'))

  },
  // end is alternate letters
  
  countCharactersUsingSubset: function() {

    function countCharactersUsingSubset(superSet, subSet) {

    let res = {}

    for(let i = 0; i < subSet.length; i++) {

      let n = 0
      let x = 0
      while(n < superSet.length) {
        // console.log(subSet[i] +' == ' + superSet[n])
        // res[subSet[i]] = 0

        if(subSet[i] == superSet[n] ) {
          res[subSet[i]] =  x += 1
          // console.log(res)
        } else {
          // console.log({n})
          res[subSet[i]] = x
          // console.log(res)

        }

        n++
        
      }
      // console.log('----')

    }

    return res

    }

    console.log(countCharactersUsingSubset("SCARE", "ACRES"))
    console.log(countCharactersUsingSubset("PINEAPPLE", "PEELAPINES"))

  }

}

// app.palindrome()
// app.removeDuplicate()
// app.getHighestPrime()
// app.isAlt()
// app.countCharactersUsingSubset()
