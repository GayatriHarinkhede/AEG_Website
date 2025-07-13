import React from 'react';
import './Container.css'; // Import the CSS file

const Container = () => {
    return (
        <div className="container">
            <div className="page">
                
                {/* Left Side */}
                <div className="left-side">
                   
                                     <div className="section">
                        <h1>TECHNICAL COMMITTEE</h1>
                      <ul>
                     <li>   Dr. Shisher Shandilya Division Head of Cyber Security and Digital Forensics VIT Bhopal.</li>
                     <li>Dr. Pushpdant Jain (Deptt. Of Mechanical Engg.VIT Bhopal)</li>
                     <li>Dr. Rajesh Purohit (Professor, MANIT)</li>
                     <li>Dr. Ramesh Kumar Nayak (Associate Professor, MANIT)</li>
                     <li>Dr. Mukesh Kirar (Assistant Professor, MANIT)</li>
                     <li>Dr. Ajay sharma, (Assistant Professor, CSE, Vit Bhopal)</li>
                     <li>Dr. Pravin Singh (Professor BUIT, Barkatullah University Bhopal)</li>
                     <li>Dr. Abhimanyu Kumar (Professor, RKDF University Bhopal)</li>
                     <li>Dr. Shrihar Pandey (HOD, ME, Eklavya University Damoh)</li>
                     <li>Dr. Himanshu Saxena (Assistant Prof.Mandsaur University, )</li>
                     <li>Dr. Nikhil Ranjan (Professor, SIRT, Bhopal)</li>
                     <li>Dr. Deepal Mehrotra(Assistant Professor, JagranLakecityUniversity)</li>
                     <li>Dr. Amit Sharma (H.O.D, Associate Professor, RKDF University)</li>
                     

                       </ul>
                    </div>
                    
                    
                            
                  
                    {/* <div className="section">
                        <h1>ORGANIZING COMMITTEE</h1>
                        <ul>
                            <li>Prof. Arun Patel (HOD, Dept. of Mechanical Engineering VIST)</li>
                            <li>Prof. Kumar Sanu (HOD, Dept. of Civil Engineering VIST)</li>
                            <li>Prof. Priya Sinha (HOD, Dept. of Computer Science & Engineering VIST)</li>
                            <li>Prof. Dr. Nidhi Saxena (Dept. of Education VGI)</li>
                        </ul>
                        <ul>
                            <li>Prof. Aditya Mishra (HOD, Dept. of Electronics & Comm. Engineering VIST)</li>
                            <li>Prof. Mrintujay Piplaha (HOD, Dept. of Electrical & Elec. Engineering VIST)</li>
                            <li>Prof. Rashmi Aswani (HOD, Dept. of Management VIST)</li>
                            <li>Prof. Kailash Sahu (HOD, Department of Pharmacy VGI)</li>
                        </ul>
                    </div> */}
                    
                </div>

                {/* Right Side */}
                <div className="right-side">
                    <div className="section">
                        <h1>CHAIRMAN (AIC RAETHM-2025)</h1>
                        <ul>
                            <li>Prof. (Dr.) Rajeev Arya (Director VIST Bhopal)</li>
                            <li>Mr. Sharad Sharma (Director, AEG Consultancy Services Pvt. Ltd.)</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h1>COORDINATOR (AIC RAETHM-2025)</h1>
                        <ul>
                            <li>Prof. Arvind Gupta (Dept. of Elex & Elec. Engg. VIST, Bhopal)</li>
                        </ul>
                    </div>   
                    
                    <div className="section">
                        <h1>CONVENORS (AIC RAETHM-2025)</h1>
                        <ul>
                            <li>Mrs. Vandana Sharma (Sr. Technical Advisor, AEG)</li>
                            <li>Ms. Yamini Singhal (Manager, AEG)</li>
                           
                        </ul>
                    </div>
                   
                   
                   
                </div>
            </div>
        </div>
    );
}

export default Container;
