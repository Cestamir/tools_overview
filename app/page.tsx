"use client"
import RippleGrid from './components/RippleGrid';

const Home = () => {
  return (
    <>
      <div style={{position: 'absolute',zIndex: "2",  top: "200px",left: "50%",transform: "translate(-50%, -50%)"}} 
      className='text-7xl'>WAZZZUZUP</div>
      <div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
    </>
  )
}

export default Home