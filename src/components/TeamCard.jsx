import React from 'react'
import { team } from '../constants/teamData'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function TeamCard() {
    return (
        <>
            {team.map((member, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={member.img}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-500"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        {member.name}
                    </h3>
                    <p className="text-green-600 font-medium">{member.role}</p>
                    <p className="text-gray-500 mt-2 text-sm">{member.desc}</p>

                    <div className="flex justify-center gap-4 mt-4 text-green-500 text-lg">
                        <a href={member.socials.fb} target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href={member.socials.github} target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard