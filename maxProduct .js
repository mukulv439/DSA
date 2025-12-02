var maxProduct = function(nums) {
    let ans = nums[0];
    let pre = 1;
    let suf = 1;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        pre = pre === 0 ? nums[i] : pre * nums[i];
        suf = suf === 0 ? nums[n - 1 - i] : suf * nums[n - 1 - i];

        ans = Math.max(ans, pre, suf);
    }

    return ans;
};
