"use client";

 function CVButton({theme,assets}) {
  return (
    <div className="cv-container">
      <a href="/assets/My-CV.pdf" download className="btn-main">
       
        <span>Download CV</span>
      </a>
    </div>
  );
}
export default CVButton 
