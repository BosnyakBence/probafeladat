const characterImages: Record<string, string> = {
  "Luke Skywalker": "/images/characters/luke.jpeg",
  "C-3PO": "images/characters/c-3po.jpeg",
  "R2-D2": "/images/characters/r2-d2.jpeg",
  "Darth Vader": "/images/characters/vader.jpg",
  "Leia Organa": "/images/characters/leia.jpeg",
  "Owen Lars": "/images/characters/owen.jpeg",
  "Beru Whitesun lars": "/images/characters/beru.jpg",
  "R5-D4": "/images/characters/r5-d4.webp",
  "Biggs Darklighter": "/images/characters/biggs.jpeg",
  "Obi-Wan Kenobi": "/images/characters/kenobi.jpg",
  "Anakin Skywalker": "/images/characters/anakin.jpg",
  "Wilhuff Tarkin": "/images/characters/tarkin.png",
  Chewbacca: "/images/characters/chewbacca.jpeg",
  "Han Solo": "/images/characters/han.jpg",
  Greedo: "/images/characters/greedo.jpg",
  "Jabba Desilijic Tiure": "/images/characters/jabba.webp",
  "Wedge Antilles": "/images/characters/wedge.jpg",
  "Jek Tono Porkins": "/images/characters/jek.jpg",
  Yoda: "/images/characters/yoda.jpg",
  Palpatine: "/images/characters/palpatine.webp",
  "Boba Fett": "/images/characters/boba.jpeg",
  "IG-88": "/images/characters/ig-88.jpeg",
  Bossk: "/images/characters/bossk.jpg",
  "Lando Calrissian": "/images/characters/lando.jpg",
  Lobot: "/images/characters/lobot.avif",
  Ackbar: "/images/characters/ackbar.jpg",
  "Mon Mothma": "/images/characters/mothma.jpeg",
  "Arvel Crynyd": "/images/characters/arvel.jpg",
  "Wicket Systri Warrick": "/images/characters/wicket.jpeg",
  "Nien Nunb": "/images/characters/nien.jpeg",
  "Qui-Gon Jinn": "/images/characters/qui-gon.png",
  "Nute Gunray": "/images/characters/nute.jpeg",
  "Finis Valorum": "/images/characters/valorum.avif",
  "Padmé Amidala": "/images/characters/padme.png",
  "Jar Jar Binks": "/images/characters/jarjar.avif",
  "Roos Tarpals": "/images/characters/roos.webp",
  "Rugor Nass": "/images/characters/rugor.jpeg",
  "Ric Olié": "/images/characters/ric.jpeg",
  Watto: "/images/characters/watto.jpg",
  Sebulba: "/images/characters/sebulba.jpeg",
  "Quarsh Panaka": "/images/characters/panaka.jpeg",
  "Shmi Skywalker": "/images/characters/shmi.avif",
  "Darth Maul": "/images/characters/maul.jpeg",
  "Bib Fortuna": "/images/characters/bib.jpg",
  "Ayla Secura": "/images/characters/ayla.jpg",
  "Ratts Tyerel": "/images/characters/ratts.jpeg",
  "Dud Bolt": "/images/characters/dud.jpg",
  Gasgano: "/images/characters/gasgano.png",
  "Ben Quadinaros":
    "https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg?region=0%2C0%2C1560%2C878",
  "Mace Windu":
    "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921",
  "Ki-Adi-Mundi":
    "https://lumiere-a.akamaihd.net/v1/images/image_9eef7fab.jpeg?region=0%2C0%2C1560%2C878",
  "Kit Fisto":
    "https://swrpggm.com/wp-content/uploads/2021/04/Kit-Fisto_FE.png",
  "Eeth Koth":
    "https://lumiere-a.akamaihd.net/v1/images/Eeth-Koth2_246ea172.jpeg",
  "Adi Gallia":
    "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg?region=0%2C0%2C1560%2C878",
  "Saesee Tiin":
    "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_9f577251.png",
  "Yarael Poof":
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/yarael-poof-.jpg",
  "Plo Koon":
    "https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg?region=0%2C0%2C1560%2C878",
  "Mas Amedda":
    "https://swrpggm.com/wp-content/uploads/2020/01/mas-amedda-main-image_756fa0ae-800x445-1.jpeg",
  "Gregar Typho":
    "https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg",
  Cordé: "https://lumiere-a.akamaihd.net/v1/images/image_3a556a5f.jpeg",
  "Cliegg Lars":
    "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg?region=0%2C49%2C1560%2C780",
  "Poggle the Lesser":
    "https://lumiere-a.akamaihd.net/v1/images/databank_pogglethelesser_01_169_7095ae3c.jpeg?region=0%2C0%2C1560%2C878",
  "Luminara Unduli":
    "https://lumiere-a.akamaihd.net/v1/images/luminara_c05b2971.jpeg?region=409%2C0%2C900%2C901",
  "Barriss Offee":
    "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1619751563108-633KRMP0M2KZY7BCWX2Y/Barriss_Offee.jpg",
  Dormé:
    "https://i.pinimg.com/236x/bb/f6/25/bbf625c91ca1f6b0cc4a11cc491f9bb0.jpg",
  Dooku:
    "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=115%2C0%2C1076%2C808",
  "Bail Prestor Organa":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/a/ad/Bail_organa_bio_pic.jpeg",
  "Jango Fett":
    "https://geeklife.hu/wp-content/uploads/2020/10/temuera-morrison-jango-fett.jpeg",
  "Zam Wesell":
    "https://www.slashfilm.com/img/gallery/zam-wesell-star-wars/intro-import.jpg",
  "Dexter Jettster":
    "https://assets-prd.ignimgs.com/2023/08/03/sw-1691072208988.jpeg",
  "Lama Su": "https://swrpggm.com/wp-content/uploads/2021/04/Lama-Su_FE.png",
  "Taun We":
    "https://cdnb.artstation.com/p/assets/images/images/046/287/669/large/danny-olavide-taunwe-camera-3-finalrender.jpg?1644761581",
  "Jocasta Nu":
    "https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg?region=294%2C0%2C1656%2C1242",
  "R4-P17":
    "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg?region=314%2C0%2C1181%2C665",
  "Wat Tambor":
    "https://lumiere-a.akamaihd.net/v1/images/1-wat-tambor-bio-1_copy_279d4f2b.jpeg?region=0,0,1280,547",
  "San Hill":
    "https://lumiere-a.akamaihd.net/v1/images/san-hill_852a226d.jpeg?region=238%2C0%2C1322%2C661",
  "Shaak Ti":
    "https://pm1.aminoapps.com/6009/fb07daa49f5bb7e7d4a9e9b367f3759caef8ab6b_00.jpg",
  Grievous:
    "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg?region=0%2C0%2C1200%2C675",
  Tarfful:
    "https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg?region=359%2C0%2C1136%2C639",
  "Raymus Antilles":
    "https://swrpggm.com/wp-content/uploads/2023/05/Raymus-Antilles_FE.png.webp",
  "Sly Moore":
    "https://lumiere-a.akamaihd.net/v1/images/sly-moore_6af90e66.jpeg?region=95%2C133%2C1116%2C628",
  "Tion Medon":
    "https://lumiere-a.akamaihd.net/v1/images/databank_tionmedon_01_169_bf78864d.jpeg?region=276%2C0%2C1170%2C878",
};

export default characterImages;
