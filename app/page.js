import React from 'react'
import Sidebar from '../components/SideBar'
import SectionTitle from '../components/SectionTitle'
import HomeIntro from '../components/HomeIntro'

function page() {
    return (
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <SectionTitle title="Welcome to My Website" />
        <HomeIntro />
      </div>
    </div>
  );
}

export default page
