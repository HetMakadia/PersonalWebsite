import "./Education.css"
import csulbImg from "./csulb.jpg"

function Education() {
    return (

        <div className=" p-14 lg:p-40  content-center ">
            <div className="items-center justify-self-center text-info ">
                <div className="card lg:card-side bg-base-100 hover:bg-base-content/5 shadow-xl w-100">
                    <figure><img src={csulbImg} alt="Album"/></figure>
                    <div className="card-body leading-3">
                        <h2 className="card-title edu-heading">B.Sc. Computer Science</h2>
                        <h2 className="card-title edu-sub-heading">California State University Long Beach</h2>
                        <div className="items-center text-info edu-text">
                            <h1>Relevant Coursework:</h1>
                            <p> - Data Structures</p>
                            <p> - Object Oriented Application Development</p>
                            <p> - Database Fundamentals</p>
                            <p> - Algorithms</p>
                            <p> - Software Engineering</p>
                            <p> - Software Project Management and Testing</p>
                            <p> - Machine Learning</p>
                            <p> - Mobile Application Development</p>
                            <p> - Senior Project</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="justify-self-center divider lg:divider-horizontal col-span-1"></div>*/}
            {/*<div className="col-span-11 lg:col-span-5 items-center text-info edu-text">*/}
            {/*    <h1>Relevant Coursework:</h1>*/}
            {/*    <p> - Data Structures</p>*/}
            {/*    <p> - Object Oriented Application Development</p>*/}
            {/*    <p> - Database Fundamentals</p>*/}
            {/*    <p> - Algorithms</p>*/}
            {/*    <p> - Software Engineering</p>*/}
            {/*    <p> - Software Project Management and Testing</p>*/}
            {/*    <p> - Machine Learning</p>*/}
            {/*    <p> - Mobile Application Development</p>*/}
            {/*    <p> - Senior Project</p>*/}
            {/*</div>*/}
        </div>

    )
}

export default Education;