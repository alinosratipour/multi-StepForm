import TextField from "../generics/Text-Field/TextField";
import EmailField from "../generics/Email-Field/EmailField";

const Step1 = () => {
  return (
    <div>
      <div className="title">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <TextField label="Name" name="name" placeholder="e.g. Stephen King" />
      <EmailField
        label="Email"
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
