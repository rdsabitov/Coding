//Given an array of integers nums and an integer target, 
//return indices of two numbers such that they add up to target. 
//You cannot use the same index twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var twoSum = function(nums, target)  { 
    let dic = new Map();
    for (let i=0;i<nums.length;i++) { 
        let num = nums[i]
        let complement = target - num;
        if(dic.has(complement)) { 
            return [i, dic.get(complement)]
        }
        dic.set(num, i)
    }
    return [-1,-1]
}


//Given a string s, return the first character to appear twice. 
//It is guaranteed that the input will have a duplicate character.

/**
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function(s) { 
   let seen = new Set();
   for (const num of s) { 
       if(seen.has(num)) { 
           return num
       }
       seen.add(num)
   }
   return " ";
}

//Given an integer array nums, 
//find all the numbers x that satisfy the following: 
//x + 1 is not in nums, and x - 1 is not in nums.

var findNumbers = function(num) { 
    let ans = []
    let nSet = new Set();
    for (const n in nums) { 
        if(!nSet.has(n+1) && !nSet.has(n-1)) { 
            ans.push(n)
        }
    }
    return ans
}


//A pangram is a sentence where every letter of the English alphabet appears at least once.

//Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
//check for lowercases, sentence containing at least 1 of every letter of the english alphabet
var checkIfPangram= function(sentence) { 
   
    // let seen = new Set()
    // for(const n in sentence) { 
    //     while(!seen.has(n)) { 
    //         seen.add(n)
    //     }
    //     if(seen.size===26) { 
    //         return true
    //     } 
    //     return false
    // }
    let seen = new Set(sentence)
    return seen.size===26
} 
//Given an array nums containing n distinct numbers in the range [0, n]
// return the only number in the range that is missing from the array.

/**
 * 
 * @param {number[]} nums
 * @return {boolean} 
 */
var missingNumber = function(nums) { 
    //construct array of size n+1, to leave a spot for the missing element
    //assign each val to -1 so we can see which position was not filled
    const res = new Array(nums.length+1).fill(-1)
    //sort the elements by assigning to the array based on val
    for (const num of nums) { 
        res[num] = num
    }
    //the remaining index is the missing value
    return res.indexOf(-1)
}


//Given an integer array arr, count how many elements x there are
//such that x + 1 is also in arr. If there are duplicates in arr, count them separately.
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) { 
    let uniqueNums = new Set(arr)
    let count = 0
    arr.forEach(num=>{ 
        if(uniqueNums.has(num+1)) { 
            count++
        }
    })
    return count
}