
import Reac,{useState} from 'react'
import StepName from './StepName'
import './steper.scss';

const Step = ({stepNumber,index,StepName, num}) => {
  return (
    <div className='stepBlock'>
        <div className='circlWrapper'>
        <div  className="circle" >{index + 1}</div>
        </div>
        <div >
           <div>
          <div className='StepsLabelWrapper'><span className='stepNumber'>{num}</span> <span className='stepInfo'>{stepNumber}</span> </div>
         
          </div>
     
        </div>
       
    </div>
  )
}

export default Step