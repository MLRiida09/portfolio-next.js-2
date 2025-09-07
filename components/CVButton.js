"use client";

 function CVButton({theme,assets}) {
  return (
    <div className="cv-container">
      <a href="/assets/My-CV.pdf" download className="btn-main">
       
        <span>My résumé</span>
      </a>
    </div>
  );
}
export default CVButton 
