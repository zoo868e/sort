import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms'

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            array:[],
        };
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0;i < 310;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }
    quickSort(){}
    mergeSort(){
        const animations = SortingAlgorithms.mergeSort(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const {comparison, swap} = animations[i];
            setTimeout(() => {
                const arrayBars = document.getElementsByClassName('array-bar');
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                arrayBars[comparison[0]].style.backgroundColor = 'red';
                setTimeout(() => {
                    arrayBars[comparison[1]].style.backgroundColor = 'green';
                    arrayBars[comparison[0]].style.backgroundColor = 'green';
                },(i + 1) * 10);
            },i * 10);
        }
    }
    bubbleSort(){}
    heapSort(){}
    selectionSort(){}
    insertionSort(){}
    testSortingAlgorithms(){
        for(let x = 0;x < 100;x++){
            const array = [];
            const length = randomIntFromInterval(1,1000);
            for(let i = 0;i < length;i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
            const mergeSortedArray = SortingAlgorithms.mergeSort(array.slice());
            console.log(arrayAreEqual(javaScriptSortedArray,mergeSortedArray));
        }
    }
    

    render(){
        const {array} = this.state;
        return(
            <div className="array-container">
                {array.map((value,idx) => (
                    <div 
                    className="array-bar" 
                    key={idx}
                    style={{height:`${value}px`}}></div>
                ))}
            <button 
            className="generate-new-array"
            onClick={() => this.resetArray()}>
                generate new array
            </button>
            <button onClick={() => this.quickSort()}>Quick sort</button>
            <button onClick={() => this.mergeSort()}>Merge sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble sort</button>
            <button onClick={() => this.heapSort()}>Heap sort</button>
            <button onClick={() => this.selectionSort()}>Selection sort</button>
            <button onClick={() => this.insertionSort()}>Insertion sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
            </div>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(arrayOne,arrayTwo){
    if(arrayOne.length !== arrayTwo.length)return false;
    for(let i = 0;i < arrayTwo.length;i++){
        if(arrayOne[i] !== arrayTwo[i])return false;
    }
    return true;
}