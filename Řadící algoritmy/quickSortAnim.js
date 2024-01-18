class QuickSortAnim extends SortAnim {
    async sortAsc(){
        this.sortRecursive( 0, this.values.length - 1);
    }

    async sortRecursive(low,high){
        if(low < high){
            let pi = await this.partitionLomuto(low,high);
            this.setSortColor(this.columns[pi])
            await this.sortRecursive(low,pi - 1);
            await this.sortRecursive(pi + 1, high)    
        } else if (low === high) {
            this.setSortColor(this.columns[low])
        }
    }

    async partitionLomuto(low,high){
        let pivot = this.values[high];
        let pi = low;
        for (let i = low; i <= high; i++) {
            if(this.values[i] < pivot){
                this.setCompareColor(this.columns[high]);
                this.setCompareColor(this.columns[low]);
                this.setCountingColor(this.columns[pi]);
                await this.sleep(100)
                this.setDefaultColor(this.columns[pi]);
                this.setDefaultColor(this.columns[high]);
                this.setDefaultColor(this.columns[low]);
                this.swapValues(pi,i)
                pi++;  
            }
            
        }
        this.swapValues(high,pi)
        return pi; 
    }
}
