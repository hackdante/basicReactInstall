import './styles/styles.css'

export const Formik = () => {
  return (
    <div className="form">
      <h2>Contact FORMIK</h2>
      <form className="form" noValidate>
        <div className="formContainer">
          <div className="form-item">
            <label className="formLabel">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" />
          </div>

          <div className="form-item">
            <label className="formLabel">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <div className="form-item">
            <label className="formLabel">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="form-item">
            <label className="formLabel">Phone</label>
            <input type="tel" name="phone" placeholder="Phone" />
          </div>

          <div className="form-item-button">
            <button type="submit">Send Info</button>
            <button type="button">Limpiar</button>
          </div>
        </div>
      </form>
      <div className="formPolitics">
        <input type="checkbox" />
        Our Terms and contitions
      </div>
    </div>
  );
};
