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

//You are given a string s and an integer k. Find the length of the longest substring
//that contains at most k distinct characters

//For example, given s = "eceba" and k = 2, return 3. 
//The longest substring with at most 2 distinct characters is "ece".

let findLongestSubstring = (s, k) => { 
    let counts = new Map()
    let left = 0, ans = 0
    for (let right = 0; right<s.length; right++) { 
        counts.set(s[right], (counts.get(s[right]) || 0) + 1)
        while(counts.size > k) { 
            counts.set(s[left], counts.get(s[left]) -1);
            if(counts.get(s[left])===0) { 
                counts.delete(s[left]);
            }
            left++
        }
        ans = Math.max(ans, right-left+1)
    }
    return ans
}


//Given a 2D array nums that contains n arrays of distinct integers, return a sorted array
//containing all the numbers that appear in all n arrays

//For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], 
//return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */

var intersection = function(nums) { 
    let counts = new Map();
    for (const arr of nums) { 
        for (const x of arr) { 
            counts.set(x, (counts.get(x) || 0) + 1)
        }
    }
    let n = nums.length;
    let ans = [];
    for(const [key, val] of counts) { 
        if (val ===n) { 
            ans.push(key)
        }
    }
    ans.sort((a,b) => a-b);
    return ans;
}


//Given a string s, determine if all characters have the same frequency.

//For example, given s = "abacbc", return true. All characters appear twice. 
//Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
var areOccurencesEqual = function (s) { 
    let counts = new Map();
    for(const c of s) { 
        counts.set(c, (counts.get(c) || 0) + 1)
    }
    let frequencies = new Set()
    for (const val of counts.values()) { 
        frequencies.add(val)
    }
    return frequencies.size===1
};




//Given an integer array nums and an integer k
//find the number of subarrays whose sum is equal to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums,k) { 
    let counts = new Map();
    counts.set(0,1);
    let ans = 0, curr =0;
    for (const num of nums) { 
        curr+=num;
        ans += counts.get(curr-k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1)
    }
    return ans;
}


//Notes
//We use curr to track the prefix sum
//At any index i, the sum up to i is curr. If there is an index j whose prefix is curr -k, then the sum of the subarray from (j,i) is curr - (curr-k)=k
//Because the array can have negative numbers, the same prefix can occur multiple times. We use a hashmap counts to track how many 
//times a prefix has occurred
//At every index i, the frequency of curr -k is equal to the number of subarrays whose sum is equal to k that end at i. Add it to the answer


//Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.

//For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 1, 2, 1, 1] and [1, 1, 2, 1, 1].

/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) { 
    let counts = new Map();
    counts.set(0,1)
    let ans =0, curr =0;
    for (const num of nums) { 
        curr += num %2
        ans +=counts.get(curr-k) ||0;
        counts.set(curr, (curr.get(curr) || 0) + 1)
    }
    return ans;
}


//You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

//Return a list answer of size 2 where:

//answer[0] is a list of all players that have not lost any matches.
//answer[1] is a list of all players that have lost exactly one match.

//The values in the two lists should be returned in increasing order.

/**
 * 
 * @param {number[][]} matches 
 * @return {number [][]}
 */

var findWinners = function(matches) { 
   const formatPlayers ={}
   for (let i=0; i<matches.length;i++) { 
       const match = matches[i]
        if(!formatPlayers[match[1]]) { 
            formatPlayers[match[1]] = 0;
        }
        if(!formatPlayers[match[0]]) { 
            formatPlayers[match[0]] = 0
        }
        formatPlayers[match[1]] ++
   }
   const keys = Object.keys(formatPlayers)
   const noLosses=[]
   const lostOnce=[]
   for (let i=0; i<keys.length;i++) { 
       if(formatPlayers[keys[i]]===0) { 
           noLosses.push(keys[i])
       }
       if(formatPlayers[keys[i]]===1) { 
           lostOnce.push(keys[i])
       }
   }
   return [noLosses, lostOnce]
}

//Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */

var largestUniqueNumber = function(nums) { 
   let myMap = new Map();
    for (const k of nums) { 
        myMap.set(k, (myMap.get(k) ||0 )+1)

    }
    let result = -1;
    for (const [key, val] of myMap) { 
        if(val===1) { 
            result = Math.max(result, key)
        }
    }
   return result
}


//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

//You can use each character in text at most once. Return the maximum number of instances that can be formed.

/**
 * @param {string} text
 * @return {number}
 */

var maxNumberOfBalloons = function(text) { 
  const BALLOON = { 
      b: 1,
      a: 1,
      l: 2,
      o: 2,
      n: 1
  }

  let newMap = new Map()
  for (let i =0; i<text.length; i++) { 
      if(newMap.has(text[i])) { 
          newMap.set(text[i], newMap.get(text[i])+1)
      } else { 
          newMap.set(text[i], 1)
      }
  }
  let output = Infinity;
  let arr = Object.keys(BALLOON)
  for (let i =0; i<arr.length; i++) { 
      let char = arr[i]
      if(!newMap.has(char)) 
      return 0

      output = Math.min(Math.floor(newMap.get(char)/(BALLOON[char])), output)
  }
  return output
}



//Given an array of strings strs, group the anagrams together.

//For example, given strs = ["eat","tea","tan","ate","nat","bat"], 
//return [["bat"],["nat","tan"],["ate","eat","tea"]].

/**
 * @param {string []} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) { 
  let groups = new Map();
  for (const s of strs) { 
      let key = s.split('').sort().join('')
      if(!groups.has(key)) { 
          groups.set(key,[])
      }
      groups.get(key).push(s)
  }

  let ans = []
  for (const group of groups.values()) { 
    ans.push(group)
  }
  return ans;
}



//Given an integer array cards, find the length of the shortest subarray that 
//contains at least one duplicate. If the array has no duplicates, return -1.

/**
 * @param {number[]} cards 
 * @return {number}
 */
//O(n)
var minimumCardPickup = function(cards) { 
    let newMap = new Map();
    for (let i =0;i<cards.length; i++) { 
        if(!newMap.has(cards[i])) { 
            newMap.set(cards[i], [])
        } else { 
            newMap.get(cards[i].push(i))
        }
    }
    let ans = Infinity
    for (const [key,value] of newMap) { 
        for (let i =0; i<value.length-1; i++) { 
            ans = Math.min(ans,value[i+1] -value[i] +1);
        }
    }
    return ans === Infinity ? -1: ans;
}


/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickupV2 = function(cards) { 
    let dic = new Map()
    let ans = Infinity
    for (let i = 0; i<cards.length; i++) { 
        if(dic.has(cards[i])) { 
            ans = Math.min(ans, i - dic.get(cards[i]) + 1)
        }
        dic.set(cards[i], i)
    }
    return ans === Infinity?-1:ans
};



//Given an array of integers nums, find the maximum value of nums[i] + nums[j], 
//where nums[i] and nums[j] have the same digit sum (the sum of their individual digits). 
//Return -1 if there is no pair of numbers with the same digit sum.

/**
 * 
 * @param {number []} nums 
 * @return {number}
 */

var maximumSum = function(nums) {
    let getDigitSum = num => { 
        let digitSum = 0;
        while(num>0) { 
            digitSum += num %10;
            num = Math.floor(num/10)
        }
        return digitSum
    }
    let dic = new Map()
    let ans = -1;
    for (const num of nums) { 
        let digitSum = getDigitSum(num)
        if(dic.has(digitSum)) { 
            ans = Math.max(ans, num + dic.get(digitSum))
        }
        dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num))
    }
    return ans;
}

//Given an n x n matrix grid, return the number of pairs (R, C) 
//where R is a row and C is a column, and R and C are equal if we consider them as 1D arrays.

var equalPairs = function(grid) { 
    let convertToKey = arr => { 
        let key = '';
        for (const num of arr) { 
            key +=num + ',';
        }
        return key;
    }
    let dic = new Map();
    for (const arr of grid) { 
        let key = convertToKey(arr);
        dic.set(key,(dic.get(key) || 0), +1)
    }
    let dic2 = new Map();
    for (let col=0; col<grid[0].length; col++) { 
        let currentCol = []
        for (let row=0; row<grid.length; row++) { 
            currentCol.push(grid[row][col])
        }
        let key= convertToKey(currentCol);
        dic2.set(key, (dic2.get(key) || 0) + 1)
    }
    let ans = 0;
    for (const [key,val] of dic) { 
        ans +=val * dic2.get(key) || 0
    }
    return ans;
}


//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine 
 * @return {boolean}  
 */
var canConstruct = function(ransomNote, magazine) { 
  const map={}

  for (let letter of magazine) {
       if(!map[letter]) { 
           map[letter] = 0
       }
       map[letter]++
  }
  for (let letter of ransomNote) {
      if(!map[letter]) { 
        return false
      } 
      map[letter]--
  }
  return true
}



//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones 
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) { 
    let count=0
    let mySet = new Set();
    for (let char of jewels) { 
        if(!mySet.has(char)) {
            mySet.add(char)
        }
    }
    for (let i =0; i<stones.length; i++) { 
        let ch = stones[i]
            if(mySet.has(ch)) { 
                count ++
        } 
    }
    return count
    
}


//Given a string s, find the length of the longest substring without repeating characters.
/**
 * 
 * @param {string} s 
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) { 
  var sLen = s.length, maxLen=0, maxStr ='', tmpStr, postIndex, i;
  for (i=0; i<sLen; i++) { 
      tmpStr = s[i]
      postIndex = maxStr.indexOf(tmpStr)
      if(postIndex>-1) { 
          maxStr=maxStr.substring(postIndex+1)
      }
      maxStr += tmpStr;
      maxLen=Math.max(maxLen, maxStr.length)
  }
  return maxLen
    
}   