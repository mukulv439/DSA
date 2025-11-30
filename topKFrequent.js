var topKFrequent = function(nums, k) {
    const freq = new Map();

    for (let n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    const heap = [];

    const pushHeap = (item) => {
        heap.push(item);
        heap.sort((a, b) => a[1] - b[1]); 
    };

    for (let [num, count] of freq.entries()) {
        pushHeap([num, count]);
        if (heap.length > k) heap.shift();
    }

    return heap.map(x => x[0]);
};
