import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  .hero-image-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
  }

  .bg-vignette{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 26%;
    bottom: 0;
    opacity: 1;
    background: linear-gradient(77deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 85%);
    transition: opacity 0.5s;
  }

  .meta-layer{
    transition: transform 1.5s cubic-bezier(.165,.84,.44,1);
    .title-wrapper{
      transform-origin: left bottom; 
      transform: scale(1) translate3d(0px, 0px, 0px); 
      transition-duration: 1300ms; 
      transition-delay: 0ms;
      .logo-wrapper{
        min-height: 13.2vw;
        position: relative;
        margin-bottom: 1.2vw;
        svg{
          width: 90%;
          transform-origin: bottom left;
        }
      }
    }
  }
`

export { Wrap }