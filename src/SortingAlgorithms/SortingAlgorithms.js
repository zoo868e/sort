


// export const mergeSort = (array) =>{
//     if(startIdx === endIdx)return;
//     const middleIdx = Math.floor((1 + endIdx - startIdx) / 2);
//     const arrayleft = mergeSort(array,startIdx,middleIdx,animations);
//     const arrayright = mergeSort(array,middleIdx + 1,endIdx,animations);
//     let i = startIdx,j = middleIdx + 1;
//     const sortedArray = [];
//     while(i < middleIdx + 1 && j < endIdx + 1){
//         if(arrayright[j] < arrayleft[i]){
//             sortedArray.push(arrayright[j]);
//             j = j + 1;
//         }
//         else{
//             sortedArray.push(arrayleft[i]);
//             i = i + 1;
//         }
//     }
//     while(i < arrayleft.length)sortedArray.push(arrayleft[i++]);
//     while(j < arrayright.length)sortedArray.push(arrayright[j++]);
//     return sortedArray;
// };

export function mergeSort(array){
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
    let i = middleIdx;
    let j = endIdx;
    while(i <= middleIdx && j <= endIdx){
        const animation = {};
        animation.comparison = [i,j];
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animation.swap = [k, i];
            mainArray[k++] = auxiliaryArray[i++];
        }else{
            animation.swap = [k,j];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation)
    }
    while(i <= middleIdx){
        animations.push({
            comparison: [i,i],
            swap: [k,i],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIdx){
        animations.push({
            comparison: [j,j],
            swap: [k,j],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}