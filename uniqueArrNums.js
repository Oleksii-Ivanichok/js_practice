const arr = [1, 1, 2, 3, 4, 4, 5, 5, 5];

function withoutRepeat(arr){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let check = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arr[i]==arr[j]){
                check++;
            }
        }
        if(check==1) res.push(arr[i])  
    }
    return res;
}

console.log(withoutRepeat(arr));