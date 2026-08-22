function searchRange(nums: number[], target: number): number[] {
    function findPosition(isLeft: boolean) {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while(left <= right) { 
            let mid = Math.floor((left + right)/2);

            if(target === nums[mid]) {
                bound = mid;
                
                if(isLeft) {
                    right = mid-1
                }
                else {
                    left = mid+1
                    }
            } else if(target < nums[mid]) {
                right = mid - 1;
            } else if (target > nums[mid]) {
                left = mid + 1;
            }
        }

        return bound;
    }

    return [findPosition(true), findPosition(false)]
};

//  0 1 2 3 4 5 
// [5,7,7,8,8,10] , target = 8
//        L M. R 

