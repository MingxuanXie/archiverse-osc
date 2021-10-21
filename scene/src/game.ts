/// --- Set up a system ---

import { connect } from './connection'

const drum1 = new AudioClip("sounds/drum1.mp3")
const drum2 = new AudioClip("sounds/bass_drum.mp3")
const piano1Clip = new AudioClip("sounds/piano-a.mp3")
const piano2Clip = new AudioClip("sounds/piano-b.mp3")
const piano3Clip = new AudioClip("sounds/piano-c.mp3")
const piano4Clip = new AudioClip("sounds/piano-d.mp3")
const source1 = new AudioSource(drum1)
const source2 = new AudioSource(drum2)
const pianoSource1 = new AudioSource(piano1Clip)
const pianoSource2 = new AudioSource(piano2Clip)
const pianoSource3 = new AudioSource(piano3Clip)
const pianoSource4 = new AudioSource(piano4Clip)


connect('my_room').then((room) => {
  log('Connected!')

  room.state.listen('fader1', (value: number) => {
    fader1.getComponent(Transform).position.y = value * 1
    if(value> 0){
      source1.playOnce()
    }
  })

  room.state.listen('fader2', (value: number) => {
    fader2.getComponent(Transform).position.z = value * 1 + 8
    if(value> 0){
      source2.playOnce()
    }
  })

  room.state.listen('fader3', (value: number) => {
    fader3.getComponent(Transform).position.y = value * 0.1
    switch (value){
      case 1 :{
        pianoSource1.playOnce()
        break
      }
      case 2 :{
        pianoSource2.playOnce()
        break
      }
      case 3 :{
        pianoSource3.playOnce()
        break
      }
      case 4 :{
        pianoSource4.playOnce()
        break
      }
      // case 5 :{
      //   pianoSource5.playOnce()
      //   break
      // }
      // case 6 :{
      //   pianoSource6.playOnce()
      //   break
      // }
      // case 7 :{
      //   pianoSource7.playOnce()
      //   break
      // }
      // case 8 :{
      //   pianoSource8.playOnce()
      //   break
      // }
    }
  })

  room.state.listen('fader4', (value: number) => {
    fader4.getComponent(Transform).position.y = value * 1
    if(value> 0.9){
      fader4.addComponentOrReplace(redMaterial)
    } else if (value > 0.6){
      fader4.addComponentOrReplace(yellowMaterial)
    } else{
      fader4.addComponentOrReplace(greenMaterial)
    }
  })
})

let greenMaterial = new Material()
greenMaterial.albedoColor = Color4.Green()

let yellowMaterial = new Material()
yellowMaterial.albedoColor = Color4.Yellow()

let redMaterial = new Material()
redMaterial.albedoColor = Color4.Red()

let fader1 = new Entity()
fader1.addComponent(source1)
fader1.addComponent(new GLTFShape("models/qingliangting-roof.gltf"))
fader1.addComponent(
  new Transform({
    position: new Vector3(8, 2, 8),
  })
)
fader1.addComponent(greenMaterial)
engine.addEntity(fader1)

let fader2 = new Entity()
fader2.addComponent(source2)
fader2.addComponent(new GLTFShape("models/qingliangting-wall.gltf"))
fader2.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
  })
)
fader2.addComponent(greenMaterial)
engine.addEntity(fader2)

let fader3 = new Entity()
fader3.addComponent(new GLTFShape("models/qingliangting-structure.gltf"))
fader3.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
  })
)
fader3.addComponent(greenMaterial)
engine.addEntity(fader3)

let fader4 = new Entity()
fader4.addComponent(new BoxShape())
fader4.addComponent(
  new Transform({
    position: new Vector3(8, 0, 16),
  })
)
fader4.addComponent(greenMaterial)
engine.addEntity(fader4)

let piano1Entity = new Entity()
piano1Entity.addComponent(pianoSource1)
piano1Entity.addComponent(
  new Transform({
    position: new Vector3(8, 0, 16),
  })
)
engine.addEntity(piano1Entity)

let piano2Entity = new Entity()
piano2Entity.addComponent(pianoSource2)
piano2Entity.addComponent(
  new Transform({
    position: new Vector3(8, 0, 16),
  })
)
engine.addEntity(piano2Entity)

let piano3Entity = new Entity()
piano3Entity.addComponent(pianoSource3)
piano3Entity.addComponent(
  new Transform({
    position: new Vector3(8, 0, 16),
  })
)
engine.addEntity(piano3Entity)

let piano4Entity = new Entity()
piano4Entity.addComponent(pianoSource4)
piano4Entity.addComponent(
  new Transform({
    position: new Vector3(8, 0, 16),
  })
)
engine.addEntity(piano4Entity)