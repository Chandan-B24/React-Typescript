import { useState } from 'react'
import '../Styles/forms.css'

type FormData = {
    name: string,
    email: string,
    age: string,
    dob: string,
}

const Forms = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        age: '',
        dob: ''
    })

    const [errors, setErrors] = useState<Partial<FormData>>({
        name: '',
        email: '',
        age: '',
        dob: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setErrors({})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let isValid: boolean = true;
        const newErrors: Partial<FormData> = { ...errors };

        const nameRegex = /^[A-Za-z ]+$/;
        if (!nameRegex.test(formData.name)) {
            newErrors.name = 'Enter a valid name';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
            isValid = false;
        }

        const ageRegex = /^(1[89]|[2-9]\d)$/;
        if (!ageRegex.test(formData.age)) {
            newErrors.age = 'Allowed only above 18 age';
            isValid = false;
        }

        const dobRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/;
        if (!dobRegex.test(formData.dob)) {
            newErrors.dob = 'Please enter a valid date in mm-dd-yyyy format';
            isValid = false;
        }

        if (isValid) {
            const queryString = new URLSearchParams(formData).toString();
            window.location.href = `/display/${queryString}`

        } else {
            setErrors(newErrors);
        }
    }

    return (
        <div className="main-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />
                        {errors.name && <span className='warning'>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
                        {errors.email && <span className='warning'>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" onChange={handleChange} value={formData.age as string} />
                        {errors.age && <span className='warning'>{errors.age}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth (mm-dd-yyyy):</label>
                        <input type="text" id="dob" name="dob" onChange={handleChange} value={formData.dob} />
                        {errors.dob && <span className='warning'>{errors.dob}</span>}
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms;
