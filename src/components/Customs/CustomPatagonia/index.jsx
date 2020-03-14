import React from 'react'
import {StCustomWidget, Content, Bg, Illustration, ContentHeader, ContentBody} from './style.css'

const CustomWidget = () => {
  return (
    <>
    <StCustomWidget>

        <Illustration>
          <a href="http://finde.latercera.com/viajes/parque-nacional-queulat-y-sus-alrededores-rodrigo-guendelman-te-da-los-imperdibles-de-esta-maravilla-verde/">
          <img src="https://s2.latercera.com/wp-content/uploads/2020/01/logo-chile-viajero.png" alt="" />
            <Bg imgbg="http://finde.latercera.com/wp-content/uploads/2020/02/bg-queulat.jpg">

          </Bg>
          </a>
        </Illustration>

      <Content>
        <ContentHeader>
          <span>Presentado por:</span>
          <a href="https://www.chileestuyo.cl/?utm_source=widget&utm_medium=finde&" target="_blank" rel="noopener noreferrer">
            <img src="https://s2.latercera.com/wp-content/uploads/2020/01/logo-chile.png" alt="" />
          </a>
        </ContentHeader>
        <ContentBody>
          <div className="iframewrapwrap">
            <div className="iframewrap">
                <iframe id="vrudopodcasts" class="vrudopodcast" src="//rudo.video/podcast/bJfpyz" width="100%" height="215" allowscriptaccess="always" allowfullscreen="true" webkitallowfullscreen="true" frameborder="0" scrolling="no" allow="autoplay; fullscreen"></iframe>
            </div>
          </div>
        </ContentBody>
      </Content>
    </StCustomWidget>
    <a href='https://pubads.g.doubleclick.net/gampad/jump?iu=/124506296/Publirreportajes/2019/Diciembre/Sernatur_Finde&sz=1x1&c=[TIMESTAMP]'>
      <img src='https://pubads.g.doubleclick.net/gampad/ad?iu=/124506296/Publirreportajes/2019/Diciembre/Sernatur_Finde&sz=1x1&c=[TIMESTAMP]' />
    </a>
    </>
  )
}

export default CustomWidget