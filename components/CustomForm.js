import React, {useState} from 'react';
import InputField from './InputField';


const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName
        });
    }

    return (
        
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>

        <img className='form-img' src='/form-img.png' alt="form-img"/>

        <h3 className="mc__title">Join our email list for future updates.</h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div className="mc__field-container">
          <InputField
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="First Name"
            isRequired
          />

          <InputField
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Last Name"
            isRequired
          />

          <InputField
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="Your Email"
            isRequired
          />

        </div>
        
        <div style={{display:'flex', alignItems:'center'}}>
        <InputField
          label="submit"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
        </div>
        
      </form>
    );
};

export default CustomForm