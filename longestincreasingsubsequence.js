var lengthOfLIS = function(nums) {
    const tails = [];

    for (let num of nums) {
        let left = 0, right = tails.length;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        tails[left] = num;
    }

    return tails.length;
};
