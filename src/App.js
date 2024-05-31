import React, { useState } from 'react';
import "./App.css"
import Checkbox from './components/Checkbox/Checkbox';
import envelopeIcon from "./assets/envelope.svg"
import linkedinIcon from "./assets/linkedin.svg"
import links from "./assets/links.svg"
import loopArrows from "./assets/loopArrows.svg"
import openMail from "./assets/openMail.svg"
import MainNameLogo from "./assets/mainNameLogo.svg"
import thunderIcon from "./assets/thunderIcon.svg"
import loopArrowsIcon from "./assets/loopArrowsIcon.svg"
import checkIcon from "./assets/checkIcon.svg"
import warningIcon from "./assets/warningIcon.svg"
import smileyFace from "./assets/smileyFace.svg"
import pinkCompanyIcon from "./assets/pinkCompanyIcon.svg"
const data = [
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Completed',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Paused',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Completed',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Interested',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Paused',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Completed',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Paused',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Completed',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Interested',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Paused',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Completed',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
  {
    name: 'Mandy Summers',
    status: 'Outreach Started',
    activity: {
      mails: "12 opens",
      replies:"2 replies" ,
      clicks:"2 link clicks"
    },
    company: 'Jupiter Labs Inc',
    jobTitle: 'Founder & CEO',
  },
];

const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (row) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(row)) {
        return prevSelectedRows.filter((r) => r !== row);
      } else {
        return [...prevSelectedRows, row];
      }
    });
  };

const getStatusIcon = (status, index) => {
    if (status === 'Outreach Started') {
      return index % 2 === 0 ? thunderIcon : loopArrowsIcon;
    } else if (status === 'Completed') {
      return checkIcon;
    } else if (status === 'Paused') {
      return warningIcon;
    } else if (status === 'Interested') {
      return smileyFace;
    }
    return null;
  };
return (
    <div className="table">
        <div className="table-head">
          <div className='empty-cell'></div>
          <div className='name-head'>Name</div>
          <div className='empty-cell'></div>
          <div className='status-head'>Status</div>
          <div className='activity-head'>Activity</div>
          <div className='company-head'>Company</div>
          <div className='job-head'>Job Title</div>
        </div>
        <div className="table-body">
          {data.map((row, index) => (
            <div key={index} className={`table-row ${selectedRows.includes(row) ? 'selected' : ''}`}>
              <div className="table-cell checkbox">
                <Checkbox
                  isChecked={selectedRows.includes(row)}
                  onChange={() => handleRowSelect(row)}
                />
              </div>
              <div className="table-cell name-cell"><img src={MainNameLogo} alt="" srcset="" /> {row.name}</div>
              <div className="table-cell linkedin-cell"><img src={envelopeIcon} alt="" srcset="" /> <img src={linkedinIcon} alt="" /></div>
              <div className="table-cell status-cell">
              <img src={getStatusIcon(row.status, index)} alt="" /> {row.status}
            </div>
              <div className="table-cell activity-cell">
                  <span className='activity-mails'>
                    <img src={openMail} alt="" srcset="" /> {row.activity.mails}
                  </span>
                  <span className='activity-replies'>
                    <img src={loopArrows} alt="" srcset="" /> {row.activity.replies}
                  </span>
                  <span className='activity-clicks'>
                    <img src={links} alt="" srcset="" /> {row.activity.clicks}
                  </span>
                </div>
              <div className="table-cell company-cell"> <img src={pinkCompanyIcon} alt="" srcset="" /> {row.company}</div>
              <div className="table-cell jobTitle-cell">{row.jobTitle}</div>
            </div>
          ))}
        </div>
    </div>
  );
};
export default DataTable;
