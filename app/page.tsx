

import { title } from "process"
import ExploreBtn from "./components/ExploreBtn"
import EventCard from "./components/EventCard"

const tools = [
{image: '/laptop-tools.jpg',title: "Event 1"},
{image: '/laptop-tools.jpg',title: "Event 2"},
{image: '/laptop-tools.jpg',title: "Event 3"},
{image: '/laptop-tools.jpg',title: "Event 4"},
{image: '/laptop-tools.jpg',title: "Event 5"},
]

const Home = () => {
  return (
    <section >
      <div style={{position: 'absolute',zIndex: "2",  top: "100px",left: "50%",transform: "translate(-50%, -50%)"}} 
      className='text-7xl'>WAZZZUZUP</div>
      <h1 className="text-center">WAZZ ZZUP</h1>
      <p className="text-center mt-5 mb-20">Tools, documentation and manuals for your favorite digital tools.</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Featured Tools</h3>
        {/* tools grid */}
        <ul className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {tools.map((tool) => (
            <li key={tool.title}>
              <EventCard title={tool.title} image={tool.image}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}   

export default Home