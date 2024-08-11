import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { motion } from "framer-motion";
import "swiper/css"; 
import { BsArrowUpRight, BsGithub,  } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import WorkSlideButtons from "./WorkSlideButtons";
// import CustomTooltip from './tooltip';

const projects = [
    {
        num: '01',
        category: 'Book My Show',
        title: 'project1',
        description: 'html 5,Css 3,Javascript, Node Js, MongoDB, Express ',
        stack: [{ name: " Full stack project without react " }],
        image: '/images/bo.webp', // Adjusted image path
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'Allen solly Clone ',
        title: 'project2',
        description: 'HTML , Css ',
        stack: [{ name: "Front End Project " }],
        image: '/images/az.png', // Adjusted image path
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'Odin Project Site',
        title: 'project3',
        description: 'Using HTML , Css',
        stack: [{ name: "Front-end Project " }],
        image: '/images/o.jpg', // Adjusted image path
        live: "",
        github: "",
    }
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const HandleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    const getProject=async ()=>{

        const res=await axios.get("http://localhost:3008/api/get")
        console.log(res.data);
        setProject([...res.data])
      }
      useEffect(()=>{
        getProject()
        
      },[])



    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: .4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto text-white">
                <h1 className="text-4xl font-bold mb-8">Projects</h1>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            {/* Outline number */}
                            <div className="text-8xl leading-none font-extrabold text-outline font-mono">{project.num}</div>
                            {/* Project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-400 transition-all duration-500 capitalize font-mono">
                                {project.category} 
                            </h2>
                            {/* Project description */}
                            <p className="text-white/60 font-mono">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-emerald-400 font-mono">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* Border */}
                            <div className="border border-white/20 my-4"></div>
                            {/* Buttons or links can go here */}
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={HandleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="text-white w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* Display project image */}
                                      <div className=""></div>
                                      {/* image */}
                                      <div className="h-full w-full relative ">
                                      <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover "
                                        />
                                      </div>
                                    </div>
                                </SwiperSlide>
                            ))}
         
                          
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;