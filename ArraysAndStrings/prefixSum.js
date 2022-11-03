//Given an integer array nums, an array queries where queries[i]=[x,y] and an integer
//limit, return a boolean array that represents the answer to each query. A query is 
//true if the sum of the subarray from x to y is less than limit, or false otherwise

/**
 * @param {number []} nums
 * @param {number[][]} queries 
 * @param {number} limit
 * @return {boolean[]}
 */

var answerQueries = function(nums, queries, limit) { 
    let prefix = [nums[0]]
    for(let i=1; i<nums.length;i++) { 
        prefix.push(nums[i] + prefix[prefix.length-1])
    }

    let ans = []
    for(const [x,y] of queries) { 
        let curr = prefix[y] - prefix[x]+nums[x]
        ans.push(curr<limit)
    }
    return ans
}


//Given an integer array nums, find the number of ways to split the array into two parts so that the first section
//has a sum greater than or equal to the sum of the second section. 
//The second section should have at least one number

/**
 * @param {number[]} nums
 * @return {number}
 */

var waysToSplitArray = function(nums) { 
    let prefix = [nums[0]];
    for (let i = 1; i<nums.length; i++) { 
        prefix.push(nums[i] + prefix[prefix.length-1])
    }

    let ans = 0; 
    for(let i =0; i<nums.length -1; i++) { 
        let leftSection = prefix[i]
        let rightSection = prefix[prefix.length-1] - prefix[i]
        if(leftSection>=rightSection) { 
            ans++
        }
    }
    return ans;
}

//improve space to O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

var waysToSplitArray2 = function(nums) { 
   let ans = 0, leftSection=0, total=0
   for(const num of nums) { 
       total += num
   }

   for(let i =0; i<nums.length-1; i++) { 
       leftSection +=nums[i]
       let rightSection = total - leftSection;
       if(leftSection >= rightSection) { 
           ans++
       }
   }
   return ans
}


//Given an array nums. We define a running sum of an array as runningSum[i] = sum(sum[0]...nums[i])
//return the running sum of nums
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) { 
    if(nums.length===0) { 
        return nums
    }
    
    for (let i =1; i<nums.length;i++) { 
        nums[i] = nums[i-1]+nums[i]
    }
    return nums
}


//Given an array of integers nums, you start with an initial positive value startValue
//in each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right)
//Return the minimum positive value of startValue such that the step by step sum is never less than 1

/**
 * @param {number[]} nums
 * @return {number}
 */


var minStartValue = function(nums) { 
    // We use "total" for current step-by-step total, "minVal" for minimum 
    // step-by-step total among all sums. Since we always start with 
    // startValue = 0, therefore the initial current step-by-step total is 0, 
    // thus we set "total" and "minVal" be 0. 
   let minVal = 0, total=0;
    
    // Iterate over the array and get the minimum step-by-step total.
   for (let i =0; i<nums.length; ++i) { 
    total += nums[i]
    minVal = Math.min(minVal, total)
   }

    // We have to let the minimum step-by-step total equals to 1, 
    // by increasing the startValue from 0 to -minVal + 1, 
    // which is just the minimum startValue we want.
   return -minVal+1
}


//Additional problems
//Given nums=[5,2,3,1,6] the prefix sum would be

// var prefixesSum = function(nums) { 

//     if(nums.length===0) {
//         return nums
//     }
//     for (let i=1; i<nums.length;i++) { 
//         nums[i] = nums[i-1] + nums[i]
//     }
//     return nums
// }

// prefixesSum()
// console.log(prefixesSum[5,2,3,1,6]);
