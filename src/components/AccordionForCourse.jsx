/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionForCourse = ({ title, body, allExpanded }) => {
    
    const [isOpen, setIsOpen] = useState(allExpanded);
    
    const AccordionOnClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Use the 'allExpanded' prop directly to update the state
        setIsOpen(allExpanded);
    }, [allExpanded]);
    
    return (
        <>
            <div className="AccordionForCourse_container">
                <button onClick={AccordionOnClick} className="AccordionForCourse__header">
                    {isOpen ? (
                        <AiOutlineMinus size={24} />
                    ) : (
                        <AiOutlinePlus size={24} />
                    )}
                    <div>
                        <h1 className="AccordionForCourse__header__title">{title}</h1>
                    </div>
                </button>
                <div className={`${isOpen ? "active" : ""} AccordionForCourse__body`}>
                    <p className="AccordionForCourse__body__text">{body}</p>
                </div>
            </div>
        </>
    );
};

export default AccordionForCourse;
