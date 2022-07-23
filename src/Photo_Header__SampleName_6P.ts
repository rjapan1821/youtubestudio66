/*
    メモ
    テクスチャ1には、 1=写真1     2=写真2     3= 写真3     4= 写真4
    テクスチャ2には、 1=写真5     2=写真6     3=youtubeヘッダー     4=SampleName

*/


//----------------Plane領域---------------------------------------------------------------------------------------
//-----------------Photo_Plane1---------------------------
const Photo_Plane1 = new Entity()
Photo_Plane1.addComponent(new Transform({
    position: new Vector3(15.219, 1.764, 4.466006),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.728, 2.398, 2.374)
}))
engine.addEntity(Photo_Plane1)


//-----------------Photo_Plane2---------------------------
const Photo_Plane2 = new Entity()
Photo_Plane2.addComponent(new Transform({
    position: new Vector3(15.219, 1.764, 8.876007),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.78, 2.432, 2.408)
}))
engine.addEntity(Photo_Plane2)


//-----------------Photo_Plane3---------------------------
const Photo_Plane3 = new Entity()
Photo_Plane3.addComponent(new Transform({
    position: new Vector3(15.219, 1.764, 13.12601),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.78, 2.432, 2.408)
}))
engine.addEntity(Photo_Plane3)



//-----------------Photo_Plane4---------------------------
const Photo_Plane4 = new Entity()
Photo_Plane4.addComponent(new Transform({
    position: new Vector3(15.219, 4.954002, 2.816007),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.78, 2.432, 2.408)
}))
engine.addEntity(Photo_Plane4)



//-----------------Photo_Plane5---------------------------
const Photo_Plane5 = new Entity()
Photo_Plane5.addComponent(new Transform({
    position: new Vector3(15.219, 4.954, 7.336001),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.78, 2.432, 2.408)
}))
engine.addEntity(Photo_Plane5)

//-----------------Photo_Plane6---------------------------
const Photo_Plane6 = new Entity()
Photo_Plane6.addComponent(new Transform({
    position: new Vector3(15.219, 4.993999, 11.84601),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(3.78, 2.432, 2.408)
}))
engine.addEntity(Photo_Plane6)


//-----------------Header_Plane---------------------------
const Header_Plane = new Entity()
Header_Plane.addComponent(new Transform({
    position: new Vector3(1.022997, 7.104002, 7.695006),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(13.246, 2.144, 0.551)
}))
engine.addEntity(Header_Plane)


//-----------------SampleName_Plane---------------------------
const SampleName_Plane = new Entity()
SampleName_Plane.addComponent(new Transform({
    position: new Vector3(8.072997, 6.914005, 0.3749999),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(9.805998, 4.404, -1.009)
}))
engine.addEntity(SampleName_Plane)


//-----------------SampleName2_Plane---------------------------
const SampleName2_Plane = new Entity()
SampleName2_Plane.addComponent(new Transform({
    position: new Vector3(8.073, 6.914, 15.465),
    rotation: new Quaternion(1, -4.371139E-08, -4.371139E-08, 1.910685E-15),
    scale: new Vector3(9.805998, 4.404, -1.009)
}))
engine.addEntity(SampleName2_Plane)




//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__Ex_plane1----------
const Photo_Plane1_UV = new PlaneShape()
Photo_Plane1_UV.uvs = [
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
Photo_Plane1.addComponent(Photo_Plane1_UV)




//------ UV__Ex_plane2----------
const Photo_Plane2_UV = new PlaneShape()
Photo_Plane2_UV.uvs = [
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
Photo_Plane2.addComponent(Photo_Plane2_UV)



//------ UV__Ex_plane3----------
const Photo_Plane3_UV = new PlaneShape()
Photo_Plane3_UV.uvs = [
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
Photo_Plane3.addComponent(Photo_Plane3_UV)

//------ UV__Ex_plane4----------
const Photo_Plane4_UV = new PlaneShape()
Photo_Plane4_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Photo_Plane4.addComponent(Photo_Plane4_UV)


//------ UV__Ex_plane5----------
const Photo_Plane5_UV = new PlaneShape()
Photo_Plane5_UV.uvs = [
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
Photo_Plane5.addComponent(Photo_Plane5_UV)


//------ UV__Ex_plane6----------
const Photo_Plane6_UV = new PlaneShape()
Photo_Plane6_UV.uvs = [
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
Photo_Plane6.addComponent(Photo_Plane6_UV)


//------ UV__Header_plane----------
const Header_Plane_UV = new PlaneShape()
Header_Plane_UV.uvs = [
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
Header_Plane.addComponent(Header_Plane_UV)

//------ UV__SampleName_plane----------
const SampleName_Plane_UV = new PlaneShape()
SampleName_Plane_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
SampleName_Plane.addComponent(SampleName_Plane_UV)
SampleName2_Plane.addComponent(SampleName_Plane_UV)






//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Photo_Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Photo_Plane1to4_Tex = new Texture("images/6__photo1,2,3,4.png")
Photo_Plane1to4_Mat.texture = Photo_Plane1to4_Tex

Photo_Plane1.addComponent(Photo_Plane1to4_Mat)
Photo_Plane2.addComponent(Photo_Plane1to4_Mat)
Photo_Plane3.addComponent(Photo_Plane1to4_Mat)
Photo_Plane4.addComponent(Photo_Plane1to4_Mat)


//-------マティ  5～8---------------
const Photo_Plane5to8_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Photo_Plane5to8_Tex = new Texture("images/6__photo5,6__header__Sample.png")
Photo_Plane5to8_Mat.texture = Photo_Plane5to8_Tex

Photo_Plane5.addComponent(Photo_Plane5to8_Mat)
Photo_Plane6.addComponent(Photo_Plane5to8_Mat)
Header_Plane.addComponent(Photo_Plane5to8_Mat)
SampleName_Plane.addComponent(Photo_Plane5to8_Mat)
SampleName2_Plane.addComponent(Photo_Plane5to8_Mat)

