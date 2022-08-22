import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "../../../hooks/forms/useForm";

export const Contact = () => {
  const [politicsTerms, setPoliticsTerms] = useState<boolean>(false);
  const { firstName, lastName, email, phone, onChangeForm, resetForm } = useForm({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  const onCheckTerms = (e: ChangeEvent<HTMLInputElement>) => {
    setPoliticsTerms(!politicsTerms);
    console.log(e.target.checked);
    console.log(e.target.value);
  };

  return (
    <div className="form">
      <h2>Contact</h2>
      <form className="form" noValidate onSubmit={onSubmitForm}>
        <div className="formContainer">
          <div className="form-item">
            <label className="formLabel">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={onChangeForm}
            />
          </div>

          <div className="form-item">
            <label className="formLabel">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={onChangeForm}
            />
          </div>
          <div className="form-item">
            <label className="formLabel">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChangeForm}
            />
          </div>

          <div className="form-item">
            <label className="formLabel">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={onChangeForm}
            />
          </div>

          <div className="form-item-button">
            <button type="submit">Send Info</button>
            <button type="button" onClick={resetForm}>Limpiar</button>
          </div>

       
        </div>
      </form>
      <div className="formPolitics">
        <input
          type="checkbox"
          onChange={onCheckTerms}
          checked={politicsTerms}
        />
        Our Terms and contitions
      </div>
    </div>
  );
};
