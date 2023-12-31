import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Hooks/AuthProvider'

const ServiceDetails = () => {
    const { id } = useParams()

    const { loading } = useContext(AuthContext)

    const [service, setService] = useState([])
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setService(data.filter(ser => ser.id == id))
                setIsLoading(!isloading)
            })
    }, [])

    const [ser] = service

    if (loading) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ser?.img} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{ser?.title}</h1>
                        <p className="mb-8 leading-relaxed">{ser?.description} Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <p className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Price: {ser?.price}</p>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default ServiceDetails