import React from "react"
import MailBtn from "../components/btn/MailBtn"
import LinkedInBtn from "../components/btn/LinkedInBtn"

export default function Info(){
    return (
        <section className="info">
            <h1 className="name">Lilly Štiglinc</h1>
            <p className="subtitle">Frontend Developer</p>
            <a className="personal-web" href="#">lilly.website</a>
            <div className="btn-container">
                <MailBtn />
                <LinkedInBtn />
            </div>
        </section>
    )
}