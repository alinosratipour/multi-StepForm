import React,{useState} from 'react'
import Step from './Step'
import StepName from './StepName'
import './steper.scss'
const StepNavigation = ({stepNumberArray}) => {


  return (
    <div className='steperWrapper'>
 
        {/* {stepNumberArray.map((item ,index)=><Step key={index}  index={index} stepNumber={item} ></Step> ) } */}
       
      {Object.keys(stepNumberArray).map((key,index)=> (
        <div >
         
         {/* <span>{key}</span> <span>{stepNumberArray[key]}</span> */}
         <Step key={index} index={index} num={key} stepNumber={stepNumberArray[key]} ></Step>
        
        </div>
))}
        
       </div>
       
  );
}

export default StepNavigation