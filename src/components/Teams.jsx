import Aos from "aos"
import { useEffect, useState } from "react"


const Teams = () => {

    const [members, setMembers] = useState([])

    useEffect(() => {
        Aos.init();
        Aos.refresh();
        fetch('/members.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data)
                // Aos.refreshHard()
            })

    }, [])



    const anime = ['flip-up', 'flip-down']

    return (
        <section className="text-gray-600 body-font my-5 overflow-hidden">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our success is driven by the talented and dedicated teams that work behind the scenes to make every event a memorable one.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        members.map(member => <div data-aos={member.id % 2 ? anime[0] : anime[1]} key={member.id} className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={member.img} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                                    <h3 className="text-gray-500 mb-3">{member.role}</h3>
                                    <p className="mb-4">{member.description}</p>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Teams