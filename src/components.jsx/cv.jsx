/* eslint-disable react/prop-types */
import React from "react";
import PersonalInfoForm from "./personal-info";
import EducationForm from "./education";
import ExperienceForm from "./experience";

const CV = ({
  personalInfo, setPersonalInfo, isEditingPersonalInfo, setIsEditingPersonalInfo,
  education, setEducation, isEditingEducation, setIsEditingEducation, experience, setExperience, isEditingExperience, setIsEditingExperience
}) => {
    return (
      <div>
        <PersonalInfoForm
          personalInfo={personalInfo}
          onSubmit={setPersonalInfo}
          isEditing={isEditingPersonalInfo}
          setIsEditing={setIsEditingPersonalInfo}
        />
        <EducationForm
          education={education}
          onSubmit={setEducation}
          isEditing={isEditingEducation}
          setIsEditing={setIsEditingEducation}
        />
        <ExperienceForm
          experience={experience}
          onSubmit={setExperience}
          isEditing={isEditingExperience}
          setIsEditing={setIsEditingExperience}
        />
      </div>
    );  
};

export default CV