export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1)return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length - 1,auxiliaryArray,animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
){
    if(startIdx === endIdx)return;
    const middleIdx = Math.floor((endIdx + startIdx) / 2);
    mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxiliaryArray,middleIdx + 1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while(i <= middleIdx && j <= endIdx){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }else{
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while(i <= middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}


export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1)return array;
    quickSortHelper(array,0,array.length - 1,animations);
    return animations
}

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations,
){
    if(endIdx > startIdx){
        const pivotIdx = Math.floor((startIdx + endIdx) / 2);
        const left = startIdx,right = endIdx;
        const NewpivotIndx = partition(mainArray,left,right,pivotIdx,animations);
        quickSortHelper(mainArray,left,NewpivotIndx - 1,animations);
        quickSortHelper(mainArray,NewpivotIndx + 1,right,animations);
    }

}

function partition(
    mainArray,
    left,
    right,
    pivotIdx,
    animations,
){
    const pivotValue = mainArray[pivotIdx];
    swapbar(mainArray,pivotIdx,right,animations);
    animations.push([1,right,right]);

    let storeIdx = left;
    
    for(let i = left;i < right;i++){
        animations.push([1,i,i]);
        if(mainArray[i] <= pivotValue){
            swapbar(mainArray,storeIdx,i,animations);
            storeIdx = storeIdx + 1;
        }
        animations.push([-1,i,i]);
    }
    swapbar(mainArray,right,storeIdx,animations);
    return storeIdx;
}

//animations:
//  1 : change bar's color which will use
// -1 : retrieved the  color that used
//  2 : overwrite the height of bar

function swapbar(
    mainArray,
    a,
    b,
    animations,
){
    animations.push([1,a,b]);
    animations.push([2,a,mainArray[b]]);
    animations.push([2,b,mainArray[a]]);
    [mainArray[a],mainArray[b]] = [mainArray[b],mainArray[a]];
    animations.push([-1,a,b]);
}