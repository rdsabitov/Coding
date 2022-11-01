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