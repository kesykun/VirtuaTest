import Course from "./Course";

const SelectCourse = ({ key, courseObj, courseExpanded }) => {
    return (
        [
            <form className="clickCourse">
                <button type="submit">Click</button>
            </form>,
            <Course 
            key={ key } 
            courseObj={ courseObj } 
            allExpanded={ courseExpanded }/>
            
        ]
    );
}

export default SelectCourse;