import React from "react";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';



export const Contact = () => {
  return <div style={{textAlign: 'center', marginTop: '20px', fontSize: '40px', position: 'sticky'}}>
    Moreen Bookstore
    <q>Your Literate Partner</q>
    <h2>Location</h2>
    <p>We are located at UCU Main Campus Mukono</p>
    <h2>Follow us on</h2>
    <div>
    <XIcon style={{width: '100px', height: '80px'}}/>
    <GitHubIcon style={{width: '100px', height: '80px'}}/>
    </div>


  </div>;
};
