import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        Aos.init();
        Aos.refresh();
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // Aos.refreshHard()
            })

    }, [])


    const anime = ["fade-up", "flip-down"]

    return (
        <section className="text-gray-600 body-font overflow-x-hidden">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR SERVICES</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to our comprehensive range of services designed to meet your every need. Here, we pride ourselves on delivering top-notch solutions that cater to both personal and professional requirements. Explore our diverse service offerings below</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        services.map(service => <div data-aos={service.id % 2 ? anime[0] : anime[1]} key={service.id} className="p-4 md:w-1/3">
                            <div className="flex flex-col justify-between h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={service.img} alt="blog" />
                                <div className=" flex-grow p-6 flex flex-col justify-between ">

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{service.title}</h1>
                                    <p className="leading-relaxed mb-2 ">{service.description}</p>


                                </div>
                                <div className="flex items-center justify-between flex-wrap justify-self-end p-2 ">
                                    <p className="flex mt-2 text-white bg-purple-500 border-0 py-1 px-2 rounded text-base">{service.price}</p>
                                    <Link to={`singleService/${service.id}`} className="flex mt-2 text-purple-600 bg-white border border-purple-600 py-1 px-2 focus:outline-none hover:bg-purple-600 hover:text-white rounded text-base">Learn More</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services