import * as React from "react"
import * as meetTheTeamStyle from "./meettheteam.module.css"

const teamMembers = [
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"},
    {name: "First Last", position: "Position", img: "https://via.placeholder.com/150"}
]

const MemberCard = ({ member }) => {
    return (
        <div className={meetTheTeamStyle.memberCard}>
            <img src={member.img} alt={member.name} className={meetTheTeamStyle.memberImage} />
            <div className={meetTheTeamStyle.nameContainer}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
            </div>
        </div>
    );
};
  
const MeetTheTeam = () => {
    return (
        <div className={meetTheTeamStyle.meetTheTeamContainer}>
            <h1 className={meetTheTeamStyle.header}>MEET THE TEAM</h1>
            <div className={meetTheTeamStyle.team}>
                {teamMembers.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    )
}

export default MeetTheTeam;