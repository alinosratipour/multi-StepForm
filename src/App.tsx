import "./App.css";
import bg from "./assets/images/bg-sidebar-desktop.svg";
import EmailField from "./components/Email-Field/EmailField";
import TextField from "./components/Text-Field/TextField";

function App() {
  return (
    <div className="container">
      <div className="form-wraper">
        <div className="form-content-wrapper">
          <div className="form-content">
            <div className="form-left-side">
              <img src={bg} className="bg-img" />
            </div>
            <div className="form-right-side">
              <div className="form-header">
                <h1>Personal Info</h1>
                <p>
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div className="form-text-fields-container">
                <TextField
                  label="Name"
                  name="name"
                  placeholder="e.g. Stephen King"
                />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
