import Aos from "aos"
import { useEffect, useState } from "react"


const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        Aos.init();
        Aos.refresh()
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                // Aos.refreshHard()
            })

    }, [])

    const anime = ['flip-up', 'fade', 'flip-down']

    return (
        <section className="text-gray-600 body-font overflow-x-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                <div className="flex flex-wrap -m-4">
                    {reviews.map(review => <div data-aos={anime[review.id - 1]} key={review.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={review.img} />
                            <p className="leading-relaxed">{review.testimonial}</p>
                            <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{review.name}</h2>
                            <p className="text-gray-500">{review.designation} </p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Testimonial