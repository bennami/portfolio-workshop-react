import React, {useEffect, useState} from 'react';
import { useHistory,useParams, } from "react-router-dom";
import axios from 'axios';
import Card from "../../components/cards/cards";
import './profile.scss';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/Nav";


function Profile() {

    const {slug} = useParams();
    const [profile, setProfile] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        async function getData(){
            const resp = await
                axios.get(`https://api.github.com/users/${slug}`);
            setProfile(resp.data);
            const repos = await
                axios.get(`https://api.github.com/users/${slug}/repos`);
            setRepositories(repos.data);
            history.push(`/profile/${slug}`);
        }
        getData();
    },[slug,history]);

    console.log(profile);


    let color;
    function randomColor() {
        //generate random color
        let r, g, b;
        //change bg color
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return  color = `rgb(${r},${g},${b})`;
    };
    randomColor();
    console.log(color)

    return(


        <>
            <Nav/>
            <Header
                name={slug}
                avatar_url={profile.avatar_url}
                bio ={profile.bio}
            />
            <section className={'listOfCards'}>

                <div  className={'list'}>
                    <div className={'cards'}>

                        { repositories.length !==0
                            ?
                            repositories.map((project, i) =>{
                                randomColor();
                                return <Card
                                    key={i}
                                    img={``}
                                    projectName={project.name}
                                    projectDescription={'Add project description'}
                                    projectLink={project.homepage}
                                    GithubLink={project.html_url}
                                    bgColor={color}
                                />
                            })
                            :
                            <>
                            <Card
                                img={``}
                                projectName={'project title'}
                                projectDescription={'Add project description'}
                                projectLink={'website link'}
                                GithubLink={'github link'}
                                bgColor={randomColor()}

                            />
                            <Card
                            img={``}
                            projectName={'project title'}
                            projectDescription={'Add project description'}
                            projectLink={'website link'}
                            GithubLink={'github link'}
                            bgColor={randomColor()}

                            />
                            <Card
                            img={``}
                            projectName={'project title'}
                            projectDescription={'Add project description'}
                            projectLink={'website link'}
                            GithubLink={'github link'}
                            bgColor={randomColor()}

                            />
                            <Card
                            img={``}
                            projectName={'project title'}
                            projectDescription={'Add project description'}
                            projectLink={'website link'}
                            GithubLink={'github link'}
                            bgColor={randomColor()}

                            />
                            </>

                        }



                    </div>
                </div>

            </section>
            <Footer/>
        </>


    );

}

export default Profile;
