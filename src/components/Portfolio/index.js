
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import film from './films.png';
import chat from './chat.png';
import github from './github.png';











const Portfolio = () => { 



    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio] = useState([
        {
            name: "Film DataBase",
            description: "A simple site where you can search" +" "+ "film titles created using an API",
            image:film,
            url: "https://movie-finder-info.netlify.app/",
            section: "one"
        },
        {
            name: "Chat Live App",
            description: "A web app that uses the "+" "+"API to let chat in real time",
            image: chat,
            url: "https://chat-app-like-msteams.netlify.app/",
            section: "two"
        },
        {
            name: "My GitHub",
            description: "View other projects",
            image:github,
            url: "https://github.com/DarkcROW99X",
            section: "three"
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderSectionOne = (portfolio) => {
        return (
           
            <div className="section-one">
                {
                    // eslint-disable-next-line array-callback-return
                    portfolio.map((port, idx) => {
                        if (port.section === "one") {
                            return (
                                <div className="image-box" key={idx}>
                                    <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="Films" />
                                    <div className="content">
                                        <p className="title">{port.name}</p>
                                        <h4 className="description">{port.description}</h4>
                                        <button
                                            className="btn"
                                            onClick={() => window.open(port.url)}
                                        >View</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }

    const renderSectionTwo = (portfolio) => {
        return (
            <div className="section-two">
                {
                    // eslint-disable-next-line array-callback-return
                    portfolio.map((port, idx) => {
                        if (port.section === "two") {
                            return (
                                <div className="image-box" key={idx}>
                                    <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="Chat App" />
                                    <div className="content">
                                        <p className="title">{port.name}</p>
                                        <h4 className="description">{port.description}</h4>
                                        <button
                                            className="btn"
                                            onClick={() => window.open(port.url)}
                                        >View</button>
                                    </div>
                                </div>
  
                            )
                        }
                    })
                }
            </div>
            
        );
    }

    const renderSectionThree = (portfolio) => {
        return (
           
            <div className="section-three">
                {
                    // eslint-disable-next-line array-callback-return
                    portfolio.map((port, idx) => {
                        if (port.section === "three") {
                            return (
                                <div className="image-box" key={idx}>
                                    <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="GITHUB" />
                                    <div className="content">
                                        <p className="title">{port.name}</p>
                                        <h4 className="description">{port.description}</h4>
                                        <button
                                            className="btn"
                                            onClick={() => window.open(port.url)}
                                        >View</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="section-container">
                {renderSectionOne(portfolio)}
                {renderSectionTwo(portfolio)}
                {renderSectionThree(portfolio)}
                
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
