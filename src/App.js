import { Canvas } from '@react-three/fiber'
import React from 'react'
import AudioAnalyser from './components/AudioAnalyser';
import GeoContainer from './components/GeoContainer';


/**
 * App-Component: contains THREE-Canvas, geometries, GeoContainer and AudioAnalyser
 **/
class App extends React.Component {
  render() {
    return (
      <div style={{margin: '-200px', backgroundColor:'black'}} >
        <Canvas   pixelRatio={window.devicePixelRatio}
                  invalidateFrameloop={false}
                  style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' }}>
          <ambientLight />

          <pointLight position={[10, 10, 10]} />

          <GeoContainer />   

          <AudioAnalyser />     
        </Canvas>              
      </div>
    )
  }
}

export default App;
