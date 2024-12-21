import React from 'react';

const projectsData = [
  {
    name: "Titan Eye+",
    category: "Multi-location Optical Stores",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776466/Titan-1_komrex.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776466/Titan-2_dp3jn4.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776466/Titan-3_zmmwbc.png",
    ],
  },
  {
    name: "GAP Retail",
    category: "Multi-location Retail Stores",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777254/GAP-1_wl5jif.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777255/GAP-2_r3sddy.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777255/GAP-3_ygnxdx.png",
    ],
  },
  {
    name: "Cole Haan",
    category: "Multi-location",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777289/ColeHaan-1_bowmtd.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777434/ColeHaan-2_lz55tf.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777437/ColeHaan-3_fqv6wf.png",
    ],
  },
  {
    name: "Johnston & Murphys",
    category: "Retail Stores - Multi location",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776497/JhonsonMurphy-1_qgxhav.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776496/JhonsonMurphy-2_zzu2dv.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776497/JhonsonMurphy-3_i2lbdi.png",
    ],
  },  {
    name: "Karle Incubation Center",
    category: "Multi-location, Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776481/Karley-1_mkkbwk.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776482/Karley-2_q0dppr.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734776482/Karley-3_zfqtpe.png",
    ],
  },  {
    name: "The Children's Place",
    category: "Retail Stores - Multi location",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777487/Childrens_Place-1_z7wnkw.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777288/Childrens_Place-2_edtrls.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777289/Childrens_Place-3_sdgh2o.png",
    ],
  },  {
    name: "Gen Works",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777253/Genwork-1_flzqk0.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777253/Genwork-2_pekbeh.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777254/Genwork-3_aaqm1y.png",
    ],
  },
  {
    name: "Hyder Consultants",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777509/Hyder-1_wmnohg.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777510/Hyder-2_qgalcr.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777492/Hyder-3_t8fepd.png",
    ],
  },
  {
    name: "CSC-Xchanging",
    category: "Shimoga",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777506/CSC-2_nxgpg8.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777507/CSC-3_azegzp.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777506/CSC-1_ea2jp1.png",
    ],
  },
  {
    name: "Cambridge Technologies",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777490/cmabridge-1_v65wst.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777489/cmabridge-2_fhwtdz.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777505/cmabridge-3_rgpdna.png",
    ],
  },
  {
    name: "TITAN Industries",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777842/Tit-1_nxchq5.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777841/Tit-3_jvqe47.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734777841/Tit-2_uk8pwt.png",
    ],
  },
  {
    name: "AON",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778716/AON-3_jrnil2.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778712/AON-2_mmfvcu.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778710/AON-1_tahygy.png",
    ],
  },
  {
    name: "Tellabs",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783114/Tellabs-1_euicx5.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783184/Tel-2_cqefqv.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783115/Tellabs-3_zabha0.png",
    ],
  },
  {
    name: "Ascendum",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778716/Asc-1_svjsbb.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778717/Asc-2_obpsfv.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778717/Asc-3_zypmrq.png",
    ],
  },
  {
    name: "Xchanging",
    category: "Chennai",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778710/XC-2_x9hxst.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778709/XC-3_dwip3k.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783118/AXCC-3_luaxjz.png",
    ],
  },
  {
    name: "Gray Matter",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778724/GM-3_ou7lvb.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734782544/GM-2_zgjz3j.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734778722/GM-1_nje8j2.png",
    ],
  },
  {
    name: "Cognizant",
    category: "Hyderabad",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783658/Cog-1_vrlitx.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783663/Cog-2_wbbkpk.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783664/Cog-3_z88wkn.png",
    ],
  },
  {
    name: "TATA ELXSI",
    category: "Trivandrum",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783673/Tata-1_ihml2f.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783674/Tata-2_z2lzka.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783677/Tata-3_i9butm.png",
    ],
  },
  {
    name: "Ridgetop Dental International",
    category: "Banglore",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783666/RD-1_inrl6o.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783669/RD-2_wv7ju1.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783670/RD-3_qzvtcu.png",
    ],
  },
  {
    name: "Architectural Projects",
    category: "Commercial",
    images: [
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783678/ARCH-1_u3ap4i.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783659/ARCH-2_ochfs6.png",
      "https://res.cloudinary.com/dsgwuim2d/image/upload/v1734783658/ARCH-3_dnjbyz.png",
    ],
  },

];

export default function ProjectsShowcase() {


  const handleBack = () => {
    window.history.back();
  }; 

  return (
    <section className="py-20 bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9]">
      <div className="container mx-auto px-4">
      <button
          onClick={handleBack}
          className="text-black px-4 py-2 rounded-md mb-4 absolute top-8 left-2 "
        >
          <span className="text-2xl">←</span>
        </button>

        <h1 className="text-5xl font-bold text-center mb-12">Our Projects</h1>

        {projectsData.map((project, projectIndex) => (
          <div key={projectIndex} className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">{project.name}</h2>
            <p className="text-lg text-gray-500 mb-6">{project.category}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`${project.name} - ${imageIndex + 1}`}
                    className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
