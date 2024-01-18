class Quicksort{
    static sortAsc(array){
        this.sortRecursive[array, 0, array.lenght - 1]
    }

    static sortRecursive(array,low,high){
        if(low < high){
            let pi = this.partitionLomuto(array,low,high);
            this.sortRecursive(array,low,pi - 1);
            this.sortRecursive(array,pi + 1, high)
        }
    }

    static partitionLomuto(array,low,high){
        let pivot = array[high];
        let pi = low - 1;
        for (let i = low; i < high; i++) {
            if(array[i] < pivot){
                pi++;
                [array[i] , array[pi]] = [array[pi], array[i]];
            }
        }
        [array[high] , array[pi]] = [array[pi], array[high]];
        return pi;
    }
}
