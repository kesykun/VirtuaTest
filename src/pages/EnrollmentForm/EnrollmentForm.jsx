import React, { useState } from 'react';
import FormInput from "../../components/FormInput";
import CourseListWithSelection from "../../components/CourseListWithSelection";
import SelectedCourses from "../../components/SelectedCourses";
import "./css/EnrollmentForm.css";

const EnrollmentForm = ({ courses, setCourses, coursesExpanded, setCoursesExpanded, selectedCourses, setSelectedCourses }) => {
    
    // Initialize state variables for form data
    const [formData, setFormData] = useState({
        StudentFirstName: "",
        StudentMiddleName: "",
        StudentLastName: "",
        StudentEmailAddress: "",
        GuardianFirstName: "",
        GuardianMiddleName: "",
        GuardianLastName: "",
        GuardianContactNumber: "",
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
    }

    // Handle input field changes and update the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    }

    return (
        <>
            <section className="enrollment__section">
                <div className="enrollment__heading">
                    <h1>Please fill out this form to enroll.</h1>
                    <p>And press "Submit" when you've completed this form</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            name="StudentFirstName" 
                            placeholder="Student's first name"
                            value={formData.StudentFirstName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="StudentMiddleName" 
                            placeholder="Student's middle name"
                            value={formData.StudentMiddleName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="StudentLastName" 
                            placeholder="Student's last name"
                            value={formData.StudentLastName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="StudentEmailAddress" 
                            placeholder="Student's email address"
                            value={formData.StudentEmailAddress}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="GuardianFirstName" 
                            placeholder="Guardian's first name"
                            value={formData.GuardianFirstName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="GuardianMiddleName" 
                            placeholder="Guardian's middle name"
                            value={formData.GuardianMiddleName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="GuardianLastName" 
                            placeholder="Guardian's last name"
                            value={formData.GuardianLastName}
                            onChange={handleInputChange}
                        />
                        <FormInput 
                            name="GuardianContactNumber" 
                            placeholder="Guardian's contact number"
                            value={formData.GuardianContactNumber}
                            onChange={handleInputChange}
                        />
                        <CourseListWithSelection  
                        courses={ courses } 
                        coursesExpanded={ coursesExpanded }
                        setCoursesExpanded={ setCoursesExpanded } 
                        selectedCourses={ selectedCourses } 
                        setSelectedCourses={ setSelectedCourses } />
                        <button>Submit</button>
                    </form>
                    <SelectedCourses 
                    selectedCourses={ selectedCourses }
                    />
                </div>
                <div>
                <CourseList /> 
                </div>
            </section>
        </>
    );
};

export default EnrollmentForm;