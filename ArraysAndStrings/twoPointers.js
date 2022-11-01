/**
 * @param {string} s 
 * @return {boolean}
 */
//linear runtime 
//if string backwards is same return true
var checkIfPalindrome = function(s) { 
    let left = 0 
    let right = s.length-1

    
    while(left<right) { 
        if(s[left]!==s[right]) { 
            return false
        }
        left ++
        right --
    }
    return true
}

/**
 * param {number[] nums}
 * param {number} target
 * @return {boolean}
 */

//If a pair of unique integers of sorted array equals to target, return true.

var checkForTarget = function(nums, target) { 
    let left = 0;
    let right = nums.length-1
    while(left<right) { 
        let curr = nums[left] + nums[right];
        if(curr === target) { 
            return true
        }
        if(curr>target) { 
            right--
        } else {
            left++
        }
    }
    return false
}


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

//combine two arrays into 1 sorted array. 

var combine = function(arr1, arr2) { 
    let ans = []
    let i =0, j =0  
    while(i<arr1.length && j<arr2.length) { 
        if(arr1[i]<arr2[j]) { 
            ans.push(arr1[i])
            i++
        } else { 
            ans.push(arr2[j])
            j++
        }
    }
    //while we still haven't exhausted either of the two arrays - keep adding to new ans array
    while(i<arr1.length) { 
        ans.push(arr1[i])
        i++
    } 
    while(j<arr2.length) { 
        ans.push(arr2[j])
        j++
    }
    return ans
}

/**
 * @param {string} 
 * @param {string} 
 * @return {boolean}
 */

//Given two strings s and t, return true if s is a subsequence of t, or false otherwise
var isSubsequence = function(s , t) { 
    let i =0, j=0;
    while(i<s.length && j<t.length) { 
        if(s[i]===t[j]) { 
            i++
        }
        j++
    }
    return i === s.length;
}

//Write a function that reverses a string. The input string is given as an array of characters s 
//You must do this by modifying the input array in-place with O(1) extra memory

/**
 * @param {character[]} s 
 * @return {void} Do not return anything, modify s in-place instead
 */

var reverseString = function(s) { 
    let right = s.length-1
    let left = 0
    while(left<right) { 
        let temp = s[left]
        s[left++] = s[right]
        s[right--] = temp
    }
    //O(N) - Time
    //O(1) - Space
}

//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted 
//in non-decreasing order

/**
 * @param {number[]} nums
 * @return {number[]}  
 */
var sortedSquares = function(nums) { 
    let n = nums.length
    let result =[]
    let right = nums.length-1
    let left = 0
    for (let i = n-1; i>=0; i--) { 
        let sqrt
        if(Math.abs(nums[left]) < Math.abs(nums[right])) { 
            sqrt = nums[right]
            right--
        } else { 
            sqrt = nums[left]
            left++
        }
        result[i] = sqrt*sqrt
    }
    return result
}