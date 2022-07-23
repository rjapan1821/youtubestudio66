

//�\�\�\�\�\�\�\�\�\OBJ_YoutubeLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const YoutubeLink_Click = new Entity()
YoutubeLink_Click.addComponent(new BoxShape())
YoutubeLink_Click.addComponent(new Transform({
    position: new Vector3(1.810002, 1.264, 1.269),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.659, 0.622, 0.221)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
const Transparent_color = new Material()
Transparent_color.albedoColor = new Color4(1, 0, 0, 0)
YoutubeLink_Click.addComponent(Transparent_color)

YoutubeLink_Click.addComponent(new OnPointerDown((e) =>{

    //��������URL �ύX�|�C���g ������������������������������������������������
    openExternalURL("https://youtube")
},
    {
        hoverText: "Open youtube",
    }
))
 

engine.addEntity(YoutubeLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_TwitterLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const TwitterLink_Click = new Entity()
TwitterLink_Click.addComponent(new BoxShape())
TwitterLink_Click.addComponent(new Transform({
    position: new Vector3(2.820001, 1.264, 1.269),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.659, 0.622, 0.221)

}))
//--------------�}�e�B-----------------------------
TwitterLink_Click.addComponent(Transparent_color)

TwitterLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������
    openExternalURL("https://twitter")
},
    {
        hoverText: "Open twitter",
    }
))

engine.addEntity(TwitterLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_WebsiteLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const WebsiteLink_Click = new Entity()
WebsiteLink_Click.addComponent(new BoxShape())
WebsiteLink_Click.addComponent(new Transform({
    position: new Vector3(3.829999, 1.264, 1.269),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.659, 0.622, 0.221)
}))
//--------------�}�e�B-----------------------------
WebsiteLink_Click.addComponent(Transparent_color)

WebsiteLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������������
    openExternalURL("https://website")
},
    {
        hoverText: "Open Website",
    }
))
engine.addEntity(WebsiteLink_Click)

