import { useEffect, useState } from "react";
import Course from "./Course";

const SelectCourse = ({ key, courseObj, courseExpanded, selectedCourses, setSelectedCourses }) => {
    const [checkBoxStatus, setCheckBoxStatus] = useState(false);
    const addToSelectedCourses = ( ) => {
        let tempSelectedCourses = selectedCourses;
        tempSelectedCourses.push( courseObj );
        setSelectedCourses(tempSelectedCourses);
    }
    useEffect(() => {
        addToSelectedCourses();
        console.log({ title: courseObj.title, checked: checkBoxStatus});
    }, [checkBoxStatus]);
    return (
        [
            <input 
            type="checkbox" 
            checked={ checkBoxStatus }
            onChange={ () => setCheckBoxStatus(!checkBoxStatus) }
            />,
            <Course 
            key={ key } 
            courseObj={ courseObj } 
            allExpanded={ courseExpanded } />
            
        ]
    );
}

export default SelectCourse;