const characterImages: Record<string, string> = {
  "Luke Skywalker":
    "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
  "C-3PO":
    "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
  "R2-D2":
    "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
  "Darth Vader":
    "https://assets.telex.hu/images/20230906/1694002393-temp-gGJEME_cover.jpg",
  "Leia Organa":
    "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
  "Owen Lars":
    "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
  "Beru Whitesun lars":
    "https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg",
  "R5-D4":
    "https://www.looper.com/img/gallery/r5-d4-the-complete-history-of-din-djarins-ally-in-the-mandalorian-explained/intro-1678514086.webp",
  "Biggs Darklighter":
    "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
  "Obi-Wan Kenobi":
    "https://www.kulter.hu/wp-content/uploads/2022/07/MV5BNjFiZTllM2ItMDBmMy00YjczLTgxMDktYmZhMWY4MDAyMjRlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
  "Anakin Skywalker":
    "https://www.liveabout.com/thmb/62CoLXqCaCTlYOYr8np2Sgjru2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-32565_R_8x10-56a83bdc5f9b58b7d0f1b389.jpg",
  "Wilhuff Tarkin":
    "https://upload.wikimedia.org/wikipedia/hu/5/5a/Grand_Moff_Tarkin.png",
  Chewbacca:
    "https://ocdn.eu/pulscms-transforms/1/0Pvk9kpTURBXy80ZWI3ZWZkNDI3NDY4NzQ3NTBmM2Q3MmZlMDc2YmRkZi5qcGeSlQPNB5zNA2_NEO3NCYWTBc0C6M0Bnt4AAaEwAQ",
  "Han Solo":
    "https://upload.wikimedia.org/wikipedia/hu/c/cd/Han_Solo_TESB.jpg",
  Greedo: "https://cdn.mos.cms.futurecdn.net/KS9oKvuRPp4FyWhjhvzRmN.jpg",
  "Jabba Desilijic Tiure":
    "https://swrpggm.com/wp-content/uploads/2021/08/Jabba_FE-2.png",
  "Wedge Antilles":
    "https://www.fanthatracks.com/wp-content/uploads/2018/09/wedgeantilles_rotj_1.jpg",
  "Jek Tono Porkins": "https://i.redd.it/kfvbjz2ootu41.jpg",
  Yoda: "https://upload.wikimedia.org/wikipedia/hu/thumb/4/45/Yoda.jpg/250px-Yoda.jpg",
  Palpatine:
    "https://media1.popsugar-assets.com/files/thumbor/kgaAD3f5OJI9NTg8xvVtDgznFX8=/360x0:1920x819/fit-in/1920x819/top/filters:format_auto():quality(85):upscale()/2019/04/13/900/n/41541398/226b55bf5cb2484188a251.84156792_.jpg",
  "Boba Fett":
    "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=205%2C34%2C1064%2C598",
  "IG-88":
    "https://lumiere-a.akamaihd.net/v1/images/ig_88_cdd5cc52.jpeg?region=0%2C95%2C2453%2C1375",
  Bossk:
    "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1630034140339-NHQ1OAH7US4DMMO8JUGH/Bossk.jpg",
  "Lando Calrissian":
    "https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
  Lobot:
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/lobot-true-purpose-star-wars-image.jpg",
  Ackbar: "https://upload.wikimedia.org/wikipedia/hu/f/fc/Ackbar_ROTJ.jpg",
  "Mon Mothma":
    "https://lumiere-a.akamaihd.net/v1/images/mon-mothma-main_06f17008.jpeg?region=247%2C0%2C1426%2C802",
  "Arvel Crynyd":
    "https://media.anakinworld.com/uploads/entries/original/personnage-sila-kott-12480.jpg",
  "Wicket Systri Warrick":
    "https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg",
  "Nien Nunb":
    "https://upload.wikimedia.org/wikipedia/en/9/9e/Nien_Nunb_Return_of_the_Jedi.jpeg",
  "Qui-Gon Jinn":
    "https://upload.wikimedia.org/wikipedia/en/a/ad/Qui-Gon_Jinn.png",
  "Nute Gunray":
    "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg?region=195%2C0%2C1171%2C878",
  "Finis Valorum":
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/03/Terence-Stamp-as-Finis-Valorum-in-Star-Wars.jpg",
  "Padmé Amidala": "https://upload.wikimedia.org/wikipedia/en/e/ee/Amidala.png",
  "Jar Jar Binks":
    "https://i.guim.co.uk/img/media/db92d0f5c8eb85f2b6f7b456d76313b9518f61c3/0_561_2086_1557/master/2086.jpg?width=465&dpr=1&s=none",
  "Roos Tarpals":
    "https://swrpggm.com/wp-content/uploads/2022/12/Roos-Tarpals_FE.jpg",
  "Rugor Nass":
    "https://lumiere-a.akamaihd.net/v1/images/databank_bossnass_01_169_ef11c0db.jpeg?region=195%2C0%2C1171%2C878",
  "Ric Olié":
    "https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg?region=0%2C0%2C1560%2C878",
  Watto:
    "https://www.looper.com/img/gallery/what-happened-to-watto-causes-a-darth-maul-plot-hole-in-star-wars-canon-schedule-for-weekend/l-intro-1692826487.jpg",
  Sebulba:
    "https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=240%2C0%2C1376%2C1380",
  "Quarsh Panaka":
    "https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg?region=0%2C0%2C1560%2C878",
  "Shmi Skywalker":
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Shmi-Skywalker-in-The-Phantom-Menace.jpg",
  "Darth Maul":
    "https://lumiere-a.akamaihd.net/v1/images/image_c0d20b99.jpeg?region=158,0,1244,700&width=768",
  "Bib Fortuna":
    "https://upload.wikimedia.org/wikipedia/en/6/65/Bib_Fortuna_%28screenshot%29.jpg",
  "Ayla Secura":
    "https://upload.wikimedia.org/wikipedia/hu/b/b8/Aayla_Secura_ROTS.jpg",
  "Ratts Tyerel":
    "https://lumiere-a.akamaihd.net/v1/images/databank_rattstyerell_01_169_031aea6d.jpeg?region=0%2C0%2C1560%2C780",
  "Dud Bolt": "https://i.redd.it/g7hfqk7sme851.jpg",
  Gasgano:
    "https://i.pinimg.com/originals/af/a6/34/afa634ec642bc467d235b2f71f804eea.png",
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
