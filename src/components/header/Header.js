import React from 'react';
import "./header.scss";

function Header  ({avatar_url,name,bio}){


    return(

        <>
            <section className="header">
                <img src={avatar_url} alt={"profilepic"}/>
                <section className={"header-text"}>
                <h2>{`Hi, I'm ${name}`}</h2>
                <p>{`I am a web developer`}</p>
                <p>{bio}</p>
                </section>
            </section>
        </>
    );
}

export default Header;
