import TextField from "../UILiberary/Text-Field/TextField";
import EmailField from "../UILiberary/Email-Field/EmailField";

const Step1 = () => {
  
const handleChange =(event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
  console.log(event.currentTarget.value);
  
}
  return (
    <div>
      <div className="title">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <TextField label="Name" name="name" placeholder="e.g. Stephen King" onChange={handleChange} />
      <EmailField
        label="Email Address"
        email="email"
        placeholder="e.g. Stephenking@lorem.com"
      />
      <TextField
        label="Phone Number"
        name="name"
        placeholder="e.g. 1 234 567 890"
      />
    </div>
  );
};

export default Step1;
