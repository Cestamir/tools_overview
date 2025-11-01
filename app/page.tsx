
import { tools } from "@/lib/constants"
import ExploreBtn from "./components/ExploreBtn"
import ToolCard from "./components/ToolCard"



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
              <ToolCard title={tool.title} image={tool.image} slug={tool.slug} main={tool.main} price={tool.price} features={tool.features} url={tool.url} type={tool.type}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}   

export default Home