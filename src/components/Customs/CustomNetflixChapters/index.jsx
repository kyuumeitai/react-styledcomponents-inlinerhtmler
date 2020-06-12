import React from 'react'
import { WrapMenu } from '../CustomAsiEmpiezaNetflix/style.css'

const LinkOrDiv = ({ url, children }) => {
  if (url && url.length > 0) {
    return (<a href={url} className="chap-wrap">
      {children}
    </a>)
  }
  return (
    <div className="chap-wrap">
      {children}
    </div>
  )
}

const CustomNetflixChapters = ({ chapters, show }) => {
  const data = [
    {
      url: "https://www.latercera.com/asi-empieza/01-sebastian-lelio/",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/X262HLKIVZCEHIUNH32QWWFAAQ.jpg",
      status: ["past", "available"],
      pretitle: "Capítulo 01",
      name: "Sebastián Lelio",
      title: "Cineasta",
      preview: "https://rudo.video/redirector/320/ccc2162da35f15c11df3d9a78dc2a691.mp4",
      label: "Disponible"
    },
    {
      url: "https://www.latercera.com/asi-empieza/02-susannah-buchan/",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/33URTPQE4ZADVN6KBJQWLDCUMI.jpg",
      status: ["past", "available"],
      pretitle: "Capítulo 02",
      name: "Susannah Buchan",
      title: "Oceanógrafa",
      preview: "https://rudo.video/redirector/480/1ee073b5a20ab3d26ccd8953564c3d6a.mp4",
      label: "Disponible"
    },
    {
      url: "https://www.latercera.com/asi-empieza/03-paulina-villalobos/",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/57MLVKMOCZFBRMVAX6TG42DB6M.jpg",
      status: ["top", "past", "available"],
      pretitle: "Capítulo 03",
      name: "Paulina Villalobos",
      title: "Lightning Designer",
      preview: "https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4",
      label: "Disponible"
    },
    {
      url: "https://www.latercera.com/asi-empieza/04-alex-anwandter/",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HVHEUPDXNZDJFN7SWRBCGEFDTY.jpg",
      status: ["top", "new", "available"],
      pretitle: "Capítulo 04",
      name: "Alex Anwandter",
      title: "Cantautor",
      preview: "https://rudo.video/redirector/480/5e299aff5fefab1c2619f5cb9bcadd8d.mp4",
      label: "Nuevo"
    },
    {
      url: "https://www.latercera.com/asi-empieza/05-caiozzama/",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/75WFR6WBQ5BCZDB6DRRQDKRTZU.jpg",
      status: ["top", "new", "available"],
      pretitle: "Capítulo 05",
      name: "Caiozzama",
      title: "Artista",
      preview: "https://rudo.video/redirector/480/2fc63f6f6f80b5cc3d6d8f0dc33466bc.mp4",
      label: "Nuevo"
    },
    {
      url: "",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/3OM2XBFXBNBTJGN4VDLAZO3XUE.jpg",
      status: ["soon"],
      pretitle: "Capítulo 06",
      name: "Francisca Valenzuela",
      title: "Cantautora",
      preview: "",
      label: "Pronto"
    },
    {
      url: "",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/GUWYUPCS2BDI3C5KAHJ7SAHIHI.jpg",
      status: ["soon"],
      pretitle: "Capítulo 07",
      name: "Alejandro Zambra",
      title: "Escritor",
      preview: "",
      label: "Pronto"
    },
  ]

  return (
    <WrapMenu className={`${chapters ? `wrapchapters-${chapters}` : ''}`}>
      <div className={`hero-chapters ${chapters ? 'withchapters-' + chapters : ''}`}>
        {
          data.map((chapter, index) => {
            if (!show || (show && chapter.status.includes(show))) {
              return (
                <div className={`chapter ${chapter.status.join(' ')}`} key={index}>
                  <LinkOrDiv url={chapter.url}>
                    <div className="chapter-img">
                      <img src={chapter.img} alt={chapter.name} />
                    </div>
                    <div className="chapter-info">
                      <div className="wrap">
                        <h3>
                          <small>{chapter.pretitle}</small>
                          {chapter.name}
                        </h3>
                        <p>{chapter.title}</p>
                      </div>
                    </div>
                    <div className="chapter-iframe">
                      <div className="video-proportion-16by9">
                        <video src={chapter.preview} muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
                      </div>
                    </div>
                    <div className="chapter-availability">
                      <span>
                        {chapter.label}
                      </span>
                    </div>
                  </LinkOrDiv>
                </div>
              )
            }
          })
        }

      </div>
    </WrapMenu>
  )
}

export default CustomNetflixChapters

        // <div className="chapter available">
        //   <a href="https://www.latercera.com/asi-empieza/03-paulina-villalobos/" className="chap-wrap">
        //     <div className="chapter-img">
        //       <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/57MLVKMOCZFBRMVAX6TG42DB6M.jpg" alt="" />
        //     </div>
        //     <div className="chapter-info">
        //       <div className="wrap">
        //         <h3>
        //           <small>Capítulo 03:</small>
        //             Paulina Villalobos</h3>
        //         <p>Lightning Designer</p>
        //       </div>
        //     </div>
        //     <div className="chapter-iframe">
        //       <div className="video-proportion-16by9">
        //         <video src="https://rudo.video/redirector/480/b00c097985bf914ebb108183036dffb3.mp4" muted="true" autoplay="true" playsinline="true" preload="auto" loop></video>
        //       </div>
        //     </div>
        //     <div className="chapter-availability">
        //       <span>
        //         Disponible
        //         </span>
        //     </div>
        //   </a>
        // </div>






              //         <div className="chapter soon">
              //   <div className="chap-wrap">
              //     <div className="chapter-img">
              //       <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/3OM2XBFXBNBTJGN4VDLAZO3XUE.jpg" alt="" />
              //     </div>
              //     <div className="chapter-info">
              //       <div className="wrap">
              //         <h3>
              //           <small>Capítulo 06:</small>
              //       Francisca Valenzuela</h3>
              //         <p>Cantautora</p>
              //       </div>
              //     </div>
              //     <div className="chapter-iframe">
              //       <div className="video-proportion-16by9">
              //         <video></video>
              //       </div>
              //     </div>
              //     <div className="chapter-availability">
              //       <span>
              //         Pronto
              //   </span>
              //     </div>
              //   </div>
              // </div>