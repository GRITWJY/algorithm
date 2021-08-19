var purchasePlans = function(nums, target) {
    let i=0, j=nums.length-1,ans =0
    nums.sort((a,b) => a-b)
    while(i<j){
        if(nums[i] + nums[j] > target) j--;
        else {
            ans += j-i;
            i++;
        }
    }
    return ans % 1000000007;
};

console.log(purchasePlans([2,5,3,5],6));
