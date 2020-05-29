import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 32vw;
  width: 100%;
  color: white;

  .hero-image-wrapper,
  .hero-video-wrapper{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    opacity: 1;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .hero-video-wrapper{
    z-index: 2;
    overflow: hidden;
  }
  .video-cut-top-bottom{
    margin-top: -10%;
    margin-bottom: -10%;
    margin-left: -16.5%;
    @media(max-width: 1600px){
      margin-left: -17.5%;
    }
    @media(max-width: 1200px){
      margin-left: -18.5%;
    }
  }

  .video-proportion-16by9{
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    iframe{
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  .bg-vignette{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    bottom: 0;
    opacity: 1;
    background-color: black;
    transition: opacity 0.5s;
    z-index: 3;
    &::after{
      content: '';
      position: absolute;
      z-index: 10;
      background-image: linear-gradient(to right,#000,transparent);
      top: 0;
      bottom: 0;
      left: 100%;
      width: 275px;
    }
  }

  .meta-layer{
    transition: transform 1.5s cubic-bezier(.165,.84,.44,1);
    width: 36%;
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 18px 0 12px 4%;
    display: grid;
    align-items: flex-end;
    left: 0;
    z-index: 3;
    .title-wrapper{
      transform-origin: left bottom; 
      transform: scale(1) translate3d(0px, 0px, 0px); 
      transition-duration: 1300ms; 
      transition-delay: 0ms;
      .logo-wrapper{
        min-height: 7.2vw;
        position: relative;
        margin-bottom: 1.2vw;
        svg{
          width: 90%;
          transform-origin: bottom left;
        }
      }
    }
    .video-actions{
      padding: 0.8em 0;
      display: flex;
      .btn-action{
        border-radius: 10px;
        padding: 6px 16px;
        border: 0;
        display: flex;
        color: black;
        text-shadow: none;
        background-color: white;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      .btn-icon{
        width: 2.4rem;
        height: 2.4rem;
      }
      .btn-text{
        font-size: 1.4rem;
        line-height: 1;
        font-weight: bold;
      }
    }
    .info-wrapper{
      color: #fff;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      font-size: 1.125vw;
      text-shadow: 2px 2px 4px rgba(0,0,0,.45);
      margin-top: 0.1vw;
      font-family: "franklin-gothic-urw", helvetica, arial, verdana, sans-serif;
      .supplemental{
        font-size: 1.6vw;
        font-weight: 700;
        transition: color 1s cubic-bezier(.165,.84,.44,1);
        text-shadow: 2px 2px 4px rgba(0,0,0,.45);
        margin: 1vw 0;
      }
      .synopsis{
        color: #999;
      }
    }
  }
`

export { Wrap }