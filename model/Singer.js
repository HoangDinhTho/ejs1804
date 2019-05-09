class Singer{
    constructor(id, name, link, avatar){
        this.id = id;
        this.name = name;
        this.link = link;
        this.avatar = avatar;
    }
    updateData(name, link, avatar){
        this.name = name;
        this.link = link;
        this.avatar = avatar;
    }
} 
const avatarLink = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/';
const profileLink = 'https://zingmp3.vn/nghe-si/';

const listSinger = [
    new Singer(1,'Chi Pu','Chi-Pu', 'a/9/e/1/a9e14b98a59c41799490cc1cf6b3de63.jpg'),
    new Singer(2,'Lệ Quyên','Le-Quyen', '3/3/d/5/33d5c02a49a4234de695ac978b416029.jpg'),
    new Singer(3,'MIN','MIN', '9/d/6/8/9d688fbd61621a13a8b6032b09366d48.jpg'),
]
module.exports = { Singer, avatarLink, profileLink, listSinger }