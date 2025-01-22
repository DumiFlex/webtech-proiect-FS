import React from "react";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import ActiveActivitiesMain from "../../components/ActiveActivities/ActiveActivitiesMain.jsx";
import ActiveActivitiesNav from "../../components/ActiveActivities/ActiveActivitiesNav.jsx";
import ActiveActivitiesPagination from "../../components/ActiveActivities/ActiveActivitiesPagination.jsx";

const StudentDashBoard = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col mt-20 h-full space-y-4">

      <div className="flex w-full space-x-4 ">
        
        <div className="flex flex-col w-2/3 space-y-4 max-h-full overflow-y-auto">
         <div className=" max-h-[40vh] flex flex-col p-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30 overflow-y-auto">
            <ActiveActivitiesNav />
            <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-grow space-y-2 p-2 ">
              <ActiveActivitiesMain />
            </div>
            <ActiveActivitiesPagination />
          </div>
          
          <div className="max-h-[40vh] flex flex-col p-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30 overflow-y-auto">
            <ActiveActivitiesNav />
              <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-grow space-y-2 p-2 ">    
              <ActiveActivitiesMain />   
            </div>
              <ActiveActivitiesPagination /> 
          </div>
          </div>
        
        
        <div className="flex flex-col items-center justify-center  ">
        <div className="max-h-[80vh] flex flex-col p-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
          <ActiveActivitiesNav />
          <div className="grid grid-cols-1 grid-row-6 gap-2 flex-grow space-y-2 p-2 overflow-y-auto">
          <ActiveActivitiesMain />

          </div>
          <ActiveActivitiesPagination />      
        </div>
        </div>
        </div>
        </div>
        
        
        <Footer />
      </div>
    </>
    
  );
};

export default StudentDashBoard;
