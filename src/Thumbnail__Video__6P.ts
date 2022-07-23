

//-----------Thumbnail1_Plane---------------------------
const Thumbnail1_click = new Entity()
Thumbnail1_click.addComponent(new Transform({
    position: new Vector3(0.9989915, 2.624001, 11.916),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(1.971, 1.117, 1.15)
}))


//-----------Thumbnail2_Plane---------------------------
const Thumbnail2_click = new Entity()
Thumbnail2_click.addComponent(new Transform({
    position: new Vector3(0.999, 2.624, 14.126),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(1.971, 1.117, 1.15)
}))

//-----------Thumbnail3_Plane---------------------------
const Thumbnail3_click = new Entity()
Thumbnail3_click.addComponent(new Transform({
    position: new Vector3(0.999, 1.244, 13.106),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(1.971, 1.117, 1.15)
}))


//-----------Video_Plane---------------------------
const Video_Plane_click = new Entity()
Video_Plane_click.addComponent(new PlaneShape())   //形をあたえる
Video_Plane_click.addComponent(new Transform({
    position: new Vector3(0.9989995, 3.273999, 6.536006),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(8.37, 4.74, 4.88)
}))



//--------------エンジン追加------------------------------------------
engine.addEntity(Thumbnail1_click)
engine.addEntity(Thumbnail2_click)
engine.addEntity(Thumbnail3_click)
engine.addEntity(Video_Plane_click)





//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__Thumbnail1_click----------
const Thumbnail1_click_UV = new PlaneShape()
Thumbnail1_click_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Thumbnail1_click.addComponent(Thumbnail1_click_UV)




//------ UV__Thumbnail2_click----------
const Thumbnail2_click_UV = new PlaneShape()
Thumbnail2_click_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Thumbnail2_click.addComponent(Thumbnail2_click_UV)



//------ UV__Thumbnail3_click----------
const Thumbnail3_click_UV = new PlaneShape()
Thumbnail3_click_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Thumbnail3_click.addComponent(Thumbnail3_click_UV)



//----------------ビデオ再生領域----------------------------------------------------------------------------------------
//---------ビデオのPlaneは、逆向き、正しくは正しい形で表示することになっているのだ-----------------


//---------------Video1------------------------------
const Video1_Material = new BasicMaterial()
const Video1_Clip = new VideoClip("Video/Video1.mp4")
const Video1_Texture = new VideoTexture(Video1_Clip)
Video1_Material.texture = Video1_Texture


//---------------Video2------------------------------
const Video2_Material = new BasicMaterial()
const Video2_Clip = new VideoClip("Video/Video2.mp4")
const Video2_Texture = new VideoTexture(Video2_Clip)
Video2_Material.texture = Video2_Texture

//---------------Video3------------------------------
const Video3_Material = new BasicMaterial()
const Video3_Clip = new VideoClip("Video/Video3.mp4")
const Video3_Texture = new VideoTexture(Video3_Clip)
Video3_Material.texture = Video3_Texture




//----------------Onclick領域---------------------------------------------------------------------------------------

let SoundOnoff =false


//-----------Video_PlaneでON/OffをするClick----------------------
Video_Plane_click.addComponent(new OnPointerDown(() => {

    SoundOnoff = !SoundOnoff
    
    if (SoundOnoff == true) {
        Video1_Texture.volume = 1
        Video2_Texture.volume = 1
        Video3_Texture.volume = 1

    }

    if (SoundOnoff == false) {
        Video1_Texture.volume = 0
        Video2_Texture.volume = 0
        Video3_Texture.volume = 0

    }

},
    {
        hoverText: "Mute",
    }
    
))


//------------Thumbnail1_click--------------------------
Thumbnail1_click.addComponent(new OnPointerDown((e) => {

    Video_Plane_click.addComponent(Video1_Material)
    Video_Plane_click.removeComponent(Video2_Material)
    Video_Plane_click.removeComponent(Video3_Material)
    Video1_Texture.reset()
    Video1_Texture.play()
    SoundOnoff = true
    Video1_Texture.volume = 1

},
    {
        hoverText: "Play Video",
    }
))



//------------Thumbnail2_click--------------------------
Thumbnail2_click.addComponent(new OnPointerDown((e) => {

    Video_Plane_click.addComponent(Video2_Material)
    Video_Plane_click.removeComponent(Video1_Material)
    Video_Plane_click.removeComponent(Video3_Material)
    Video2_Texture.reset()
    Video2_Texture.play()
    SoundOnoff = true
    Video2_Texture.volume = 1


},
    {
        hoverText: "Play Video",
    }
))


//------------Thumbnail3_click--------------------------
Thumbnail3_click.addComponent(new OnPointerDown((e) => {

    Video_Plane_click.addComponent(Video3_Material)
    Video_Plane_click.removeComponent(Video1_Material)
    Video_Plane_click.removeComponent(Video2_Material)
    Video3_Texture.reset()
    Video3_Texture.play()
    SoundOnoff = true
    Video3_Texture.volume = 1

},
    {
        hoverText: "Play Video",
    }
))





//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Thumbnail_1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Thumbnail_1to4_Tex = new Texture("images/Thumbnail_youtube.png")
Thumbnail_1to4_Mat.texture = Thumbnail_1to4_Tex


Thumbnail1_click.addComponent(Thumbnail_1to4_Mat)
Thumbnail2_click.addComponent(Thumbnail_1to4_Mat)
Thumbnail3_click.addComponent(Thumbnail_1to4_Mat)

