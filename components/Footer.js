import React from "react"
import FacebookBtn from "../components/btn/FacebookBtn"
import GitHubBtn from "../components/btn/GitHubBtn"
import InstagramBtn from "../components/btn/InstagramBtn"
import TwitterBtn from "../components/btn/TwitterBtn"



export default function Footer(){
    return (
        <footer>
            <InstagramBtn />
            <FacebookBtn />
            <TwitterBtn />
            <GitHubBtn />
        </footer>
        
    )
}