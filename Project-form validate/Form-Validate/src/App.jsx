
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    aadhaar: "",
    pan: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    currentAddress: "",
    sameAddress: false,
    photo: null,
    signature: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setForm({
        ...form,
        [name]: files[0] || null,
      });
    } else if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
        ...(name === "sameAddress" && checked
          ? { currentAddress: form.permanentAddress }
          : {}),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    // Required fields
    if (!form.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!form.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!form.dob)
      newErrors.dob = "Date of birth is required";

    if (!form.gender)
      newErrors.gender = "Select gender";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    // Mobile number
    if (!form.mobile)
      newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Mobile number must be 10 digits";

    // Aadhaar number
    if (!form.aadhaar)
      newErrors.aadhaar = "Aadhaar number is required";
    else if (!/^\d{12}$/.test(form.aadhaar))
      newErrors.aadhaar = "Aadhaar must be 12 digits";

    // PAN number
    if (!form.pan)
      newErrors.pan = "PAN number is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan))
      newErrors.pan = "Enter valid PAN format (ABCDE1234F)";

    // Password
    if (!form.password)
      newErrors.password = "Password is required";
    else if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    else if (!/[A-Z]/.test(form.password))
      newErrors.password = "Include at least one uppercase letter";
    else if (!/[a-z]/.test(form.password))
      newErrors.password = "Include at least one lowercase letter";
    else if (!/[0-9]/.test(form.password))
      newErrors.password = "Include at least one number";

    // Confirm password
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    // Permanent address
    if (!form.permanentAddress.trim())
      newErrors.permanentAddress = "Permanent address is required";

    // Current address
    if (!form.currentAddress.trim())
      newErrors.currentAddress = "Current address is required";

    // Photo restriction
    if (!form.photo) {
      newErrors.photo = "Photo is required";
    } else if (!["image/jpeg", "image/png"].includes(form.photo.type)) {
      newErrors.photo = "Only JPG and PNG images allowed";
    } else if (form.photo.size > 2 * 1024 * 1024) {
      newErrors.photo = "Photo must be less than 2MB";
    }

    // Signature restriction
    if (!form.signature) {
      newErrors.signature = "Signature is required";
    } else if (
      !["image/jpeg", "image/png"].includes(form.signature.type)
    ) {
      newErrors.signature = "Only JPG and PNG images allowed";
    } else if (form.signature.size > 1 * 1024 * 1024) {
      newErrors.signature = "Signature must be less than 1MB";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  const handleClear = () => {
    setForm({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      aadhaar: "",
      pan: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      currentAddress: "",
      sameAddress: false,
      photo: null,
      signature: null,
    });

    setErrors({});
    setSubmitted(false);

    // Reset file inputs
    document
      .querySelectorAll('input[type="file"]')
      .forEach((input) => (input.value = ""));
  };

  return (
    <div className="page">
      <div className="form-container">
        <h1>PAN Card Application</h1>
        <p className="subtitle">
          Fill in the details to apply for your PAN Card
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <h2>Personal Details</h2>

          <div className="grid">
            <div className="field">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
              />
              <span>{errors.firstName}</span>
            </div>

            <div className="field">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
              />
              <span>{errors.lastName}</span>
            </div>

            <div className="field">
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
              <span>{errors.dob}</span>
            </div>

            <div className="field">
              <label>Gender *</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span>{errors.gender}</span>
            </div>

            <div className="field">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
              <span>{errors.email}</span>
            </div>

            <div className="field">
              <label>Country Code</label>
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+65">+65 (Singapore)</option>
              </select>
            </div>

            <div className="field">
              <label>Mobile Number *</label>
              <input
                type="text"
                name="mobile"
                placeholder="10 digit number"
                maxLength="10"
                inputMode="numeric"
                value={form.mobile}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
              />
              <span>{errors.mobile}</span>
            </div>

            <div className="field">
              <label>Aadhaar Number *</label>
              <input
                type="text"
                name="aadhaar"
                placeholder="12 digit Aadhaar"
                maxLength="12"
                inputMode="numeric"
                value={form.aadhaar}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
              />
              <span>{errors.aadhaar}</span>
            </div>

            <div className="field">
              <label>PAN Number *</label>
              <input
                type="text"
                name="pan"
                placeholder="ABCDE1234F"
                maxLength="10"
                value={form.pan}
                onChange={(e) => {
                  const value = e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");

                  handleChange({
                    target: {
                      name: "pan",
                      value: value,
                      type: "text",
                    },
                  });
                }}
              />
              <span>{errors.pan}</span>
            </div>
          </div>

          <h2>Account Security</h2>

          <div className="grid">
            <div className="field">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
              <small>
                Min 8 characters, uppercase, lowercase and number
              </small>
              <span>{errors.password}</span>
            </div>

            <div className="field">
              <label>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <span>{errors.confirmPassword}</span>
            </div>
          </div>

          <h2>Address Details</h2>

          <div className="field full">
            <label>Permanent Address *</label>
            <textarea
              name="permanentAddress"
              placeholder="Enter permanent address"
              value={form.permanentAddress}
              onChange={handleChange}
              rows="3"
            />
            <span>{errors.permanentAddress}</span>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="sameAddress"
              checked={form.sameAddress}
              onChange={handleChange}
            />
            <label>Current address is same as permanent address</label>
          </div>

          <div className="field full">
            <label>Current Address *</label>
            <textarea
              name="currentAddress"
              placeholder="Enter current address"
              value={form.currentAddress}
              onChange={handleChange}
              rows="3"
              disabled={form.sameAddress}
            />
            <span>{errors.currentAddress}</span>
          </div>

          <h2>Upload Documents</h2>

          <div className="grid">
            <div className="field">
              <label>Photo *</label>
              <input
                type="file"
                name="photo"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
              />
              <small>JPG / PNG | Max 2MB</small>
              <span>{errors.photo}</span>
            </div>

            <div className="field">
              <label>Signature *</label>
              <input
                type="file"
                name="signature"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
              />
              <small>JPG / PNG | Max 1MB</small>
              <span>{errors.signature}</span>
            </div>
          </div>

          <div className="buttons">
            <button type="submit" className="submit">
              Submit
            </button>

            <button
              type="button"
              className="clear"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

          {submitted && (
            <p className="success">
              Form validation successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;