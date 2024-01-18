class MergeSort{
    static sortAsc(array){
        let array1 = array;
        let array2 = new Array(array.length);
        for (let size = 1; size < array.length; size*=2) {
            for (let low = 0; low < array.length; low += size *2) {
                let mid = low + size;
                if (mid >= array.length) mid = array.length -1;
                let high = low + size * 2;
                if (high > array.length) high = array.length;
                
                let i = low, j = mid, k = low;
                while(i < mid && j < high) {
                    if (array1[i] < array1[j]) {
                        array2[k] = array1[i];
                        i++
                    } else {
                        array2[k] = array1[j];
                        j++;
                    }
                    k++;
                }
                while(i<mid){
                    array2[k] = array1[i];
                    i++;
                    k++;
                }
                while(j<high){
                    array2[k] = array1[j];
                    j++;
                    k++;
                }
            }
            [array1, array2] = [array2, array1]
        }
        if(array1 != array){
            for (let i = 0; i < array.length; i++) {
                array[i] = array1[i]
            }
        }
        
    }
}