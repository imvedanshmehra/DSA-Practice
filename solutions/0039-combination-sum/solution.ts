function combinationSum(candidates: number[], target: number): number[][] {
    let result = [];
    let temp = []

    function search(idx, remaining) {
        if(remaining === 0) {
            result.push(temp.slice())
        }

        if(remaining < 0) {
            return;
        }

        for (let i = idx; i < candidates.length; i++) {
        temp.push(candidates[i]);              
        search(i, remaining - candidates[i]); 
        temp.pop();                             
    }

    }

    search(0, target)
    return result;
};

