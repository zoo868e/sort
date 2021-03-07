export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1)return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length - 1,auxiliaryArray,animations);
    return animations
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
    complete(array, 0, array.length - 1,animations)
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
//  1 : change bar's color which will use second
// -1 : change bar's color which will use first
//  3 : change bar's color which will use third
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

export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1)return array;
    bubbleSortHelper(array,0,array.length - 1,animations);
    return animations
}

function bubbleSortHelper(mainArray, startIdx, endIDx, animations){
    for(let i = startIdx;i < endIDx;i++){
        for(let j = startIdx;j < endIDx - i;j++){
            animations.push([1, j, j + 1])
            if(mainArray[j] > mainArray[j + 1]){
                swapbar(mainArray, j, j + 1, animations)
            }
            animations.push([-1, j, j + 1])
        }
    }
    complete(mainArray, startIdx, endIDx,animations)
}

export function getSelectionSortAnimations(array){
    const animations = [];
    if(array.length <= 1)return array;
    selectionSortHelper(array,0,array.length - 1,animations);
    return animations
}

function selectionSortHelper(mainArray, startIdx, endIDx, animations){
    for(let i = startIdx;i < endIDx;i++){
        let max = i
        animations.push([1, i, i])
        for(let j = i + 1;j <= endIDx;j++){
            animations.push([1, j, j])
            if(mainArray[j] < mainArray[max]){
                animations.push([3, j, j])
                animations.push([-1, max, max])
                max = j
            }
            else{
                animations.push([-1, j, j])
            }
        }
        swapbar(mainArray, i, max, animations)
    }
    complete(mainArray, startIdx, endIDx,animations)
}

export function getInsertionSortAnimations(array){
    const animations = [];
    if(array.length <= 1)return array;
    insertionSortHelper(array,0,array.length - 1,animations);
    return animations
}

function insertionSortHelper(mainArray, startIdx, endIDx, animations){
    for(let i = startIdx + 1;i <= endIDx;i++){
        let j = i
        while(j > 0 && mainArray[j] < mainArray[j - 1]){
            swapbar(mainArray, j, j - 1, animations)
            j--
        }
    }
    complete(mainArray, startIdx, endIDx,animations)
}

function complete(mainArray, startIdx, endIdx, animations){
    for(let i = startIdx;i <= endIdx;i++){
        animations.push([1, i, i])
        animations.push([-1, i, i])
    }
}