/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k

var findLength = function(nums, k) { 
    let left = 0, curr=0, ans = 0;
    for (let right = 0; right<nums.length; right++) { 
        curr+=nums[right]
        while(curr>k) { 
            curr-=nums[left]
            left++
        }
        ans = Math.max(ans, right-left+1);
    }
    return ans;
}



/**
 * @param {string} s
 * @return {number}
 */

//You are given a binary substring s(a string containing only '0' and '1'). An operation
//involves flipping a '0' into a '1'. What is the length of the longest substring 
//containing only '1' after performing at most one operation?
var findLength = function(s) { 
    let left = 0, curr=0, ans =0;
    for (let right =0; right<s.length;right++) { 
        if(s[right] === '0') { 
            curr++
        }
        while(curr>1) { 
            if(s[left]==='0') { 
                curr -= 1;
            }
            left++
        }
        ans = Math.max(ans, right - left +1)
    }
    return ans;
}


/**
 * @param {number[nums]} nums
 * @param {number} k
 * @return {number} 
 */

 //Given an array of positive integers nums and an integer k, return the number of contigious subarrays 
 //where the product of all the elements in the subarray is strictly less than k 

 var numSubarrayProductlessThanK = function(nums,k) { 
     let ans = 0, left = 0, curr=1;
     for (let right=0; right<nums.length;right++) { 
         curr *= nums[right]
         while(left<=right && curr>=k) { 
             curr /= nums[left]
             left ++
         }
         ans +=right -left+1
     }
     return ans;
 }


 /**
  * @param {number []} nums
  * @param {number} k
  * @return {number}
  */

 //Given an integer array nums and an integer k, find the sum of the subarray with the largest
 //sum whose length is k

var findBestSubarray = function(nums, k) { 
    let curr = 0;
    for (let i =0; i<k;i++) { 
        curr+=nums[i]
    } 
    let ans = curr
    for(let i =k; i<nums.length; i++) { 
        curr+=nums[i] - nums[i-k]
        ans = Math.max(ans,curr)
    }
    return ans;
}


/**
 * @param {number[]} nums
 * @param {number} k 
 * @return {number}
 */

//You are given an integer array nums consisting of n elements, and an integer k
//Find a contigious subarray whose length is equal to k that has the maximum
//average value and return this value.

var findMaxAverage = function(nums,k) { 
    let curSum = 0;
    for (let i =0; i<k;i++) { 
        curSum +=nums[i]
    }
    let maxSum = curSum
    for (let i =k; i<nums.length; i++) { 
        curSum += nums[i] - nums[i-k];
        maxSum = Math.max(curSum, maxSum)
    }
    return maxSum/k;
}


/**
 * @param {number[]} nums
 * @param {number} k 
 * @return {number}
 */

//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's

var longestOnes = function(nums, k) { 
    let start = 0;
    let length =nums.length;
    let ans = 0, count=0
    for(let i=0; i<length;i++) { 
        if(!nums[i]) 
            ++count
        
        while(count>k) { 
            if(!nums[start]) 
                --count
                start++
            
        }
        ans = Math.max(ans, i-start+1)
    }
    return ans}
