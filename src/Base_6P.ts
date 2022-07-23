

//―――――――――OBJ_Bill_All――――――――――-----―――

const Bill_All = new Entity()
Bill_All.addComponent(new GLTFShape("models/6.Youtube_Studio_gltf.gltf"))   
Bill_All.addComponent(new Transform({
    position: new Vector3(8.08, -0.066, 7.932),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1) 
}))

engine.addEntity(Bill_All)

