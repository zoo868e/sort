import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations,getQuickSortAnimations,getBubbleSortAnimations} from '../SortingAlgorithms/SortingAlgorithms'
import {getSelectionSortAnimations, getInsertionSortAnimations} from "../SortingAlgorithms/SortingAlgorithms";
const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = 'blue';
const SECONDARY_COLOR = 'red';
const THIRDY_COLOR = 'green';

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
        for(let i = 0;i < NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }
    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const action = animations[i][0];
            if(action === 1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === -1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = color;
                    barOneStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const action = animations[i][0];
            if(action === 1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === -1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    heapSort(){}
    selectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const action = animations[i][0];
            if(action === 1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === -1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === 3){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = THIRDY_COLOR;
                    barOneStyle.backgroundColor = THIRDY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    insertionSort(){
        const animations = getInsertionSortAnimations(this.state.array);
        for(let i = 0;i < animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const action = animations[i][0];
            if(action === 1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === -1){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(action === 3){
                const [temp, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = THIRDY_COLOR;
                    barOneStyle.backgroundColor = THIRDY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    testSortingAlgorithms(){
        for(let x = 0;x < 100;x++){
            const array = [];
            const length = randomIntFromInterval(1,1000);
            for(let i = 0;i < length;i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
            const mergeSortedArray = getMergeSortAnimations(array.slice());
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
                    style={{
                        height:`${value}px`,
                        backgroundColor: PRIMARY_COLOR
                    }}></div>
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
            <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms (BROKEN)</button>
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