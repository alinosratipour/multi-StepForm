

const Setep3 = () => {

    const addOns = [
        {
          name: 'Online service',
          description: 'Access to multiplayer games',
          price: {
            monthly: 1,
            yearly: 10
          }
        },
        {
          name: 'Larger storage',
          description: 'Extra 1TB of cloud save',
          price: {
            monthly: 2,
            yearly: 20
          }
        },
        {
          name: 'Customizable profile',
          description: 'Custom theme on your profile',
          price: {
            monthly: 2,
            yearly: 20
          }
        }
      ]
      
  

  return (
    <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

<div className="add-on-container">
  {addOns.map(item=>{
    return(
      <div className="add-on-box">
         <div className="add-on-contents">
            <div className="name-and-desciption">
            <span className="add-on-name">{item.name}</span>
            <span className="add-on-desciption">{item.description}</span>
            </div>
           
            <span className="add-on-price">+$/{item.price.monthly}</span>
         </div>
        
     
      </div>  
    )
  })}
</div>



        </div>
  )
}

export default Setep3