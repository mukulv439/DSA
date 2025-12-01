var findKthLargest = function(nums, k) {
    let target = nums.length - k;

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        // Random pivot index
        let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        // Partition
        let pivot = nums[right];
        let p = left;
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                if (i !== p) [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }
        [nums[p], nums[right]] = [nums[right], nums[p]];

        // Check pivot position
        if (p === target) return nums[p];
        else if (p < target) left = p + 1;
        else right = p - 1;
    }
};
