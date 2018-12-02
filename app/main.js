

import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'


class Main extends Component {
  constructor() {
    super()
    // this.state = { color: 'red' }
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img crossOrigin id="groundTexture" src="img/floor.jpg" />
          <img crossOrigin id="skyTexture" src="img/sky.jpg" />
          <img crossOrigin id="safetynet" src="img/safetynet.png" />
        </a-assets>

        <Entity
          primitive="a-plane"
          color='#008000q'
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="0.5"
          position="0 5 1"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src='#skyTexture'
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity
          text={{ value: 'Spencer Romberg', align: 'center' }}
          position={{ x: 0, y: 2, z: -1 }}
        />
        {/* <Entity 
          class="link"
          primitive= 'a-plane'
          position="2 2 -3"
          material="shader: flat; src: #cubes-thumb"
          src='#safetynet' /> */}
        <Entity 
          primitive='a-sphere' 
          src='#groundTexture'  
          position="-2 2 -3"/>
        <Entity 
          primitive='a-cylinder' 
          color="blue" 
          position="2 1 -3"/>
        <Entity
          primitive='a-box'
          src='#safetynet'
          position='0 0.5 3'
          rotation="0 30 0"
          height='0.5'
          width='0.5'
          depth='0.5'
          // events={{ click: this.changeColor.bind(this) }}
        />
        <Entity
          primitive='a-box'
          src='#safetynet'
          position='0 1 3'
          rotation="0 15 0"
          height='0.5'
          width='0.5'
          depth='0.5'
        />
        <Entity
          primitive='a-box'
          src='#safetynet'
          position='0 1.5 3'
          rotation="0 -30 0"
          height='0.5'
          width='0.5'
          depth='0.5'
        />
        <Entity
          primitive='a-box'
          src='#safetynet'
          position='0 2 3'
          rotation="0 33 0"
          height='0.5'
          width='0.5'
          depth='0.5'
        />
          {/* <Entity
            animation__scale={{
              property: 'scale',
              dir: 'alternate',
              dur: 100,
              loop: true,
              to: '2 2 2'
            }}
            geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: '#24CAFF' }}
          /> */}
        {/* </Entity> */}

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"

          />
        </Entity>
      </Scene>
    )
  }
}

          // box ---- animation__rotate={{
          //   property: 'rotation',
          //   dur: 2000,
          //   loop: true,
          //   to: '360 360 360'
          // }}
          // animation__scale={{
          //   property: 'scale',
          //   dir: 'alternate',
          //   dur: 100,
          //   loop: true,
          //   to: '1.1 1.1 1.1'
          // }}

            // camera ---- animation__click={{
            //   property: 'scale',
            //   startEvents: 'click',
            //   from: '0.1 0.1 0.1',
            //   to: '1 1 1',
            //   dur: 150
            // }}
export default Main
