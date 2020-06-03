import styled from 'styled-components'

const WrapVideo = styled.div`
  position: relative;
  overflow: hidden;
  height: 32vw;
  width: 100%;
  color: white;
  @media(max-width: 800px){
    height: 80vh;
  }
  .h-m{
    /* @media(max-width: 800px){
      display: none;
    } */
  }
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
    @media(max-width: 800px){
      width: 100%;
    }
  }
  .hero-video-wrapper{
    z-index: 2;
    overflow: hidden;
  }
  .video-proportion-16by9{
    @media(max-width: 800px){
      display: none;
    }
  }
  .video-proportion-9by16{
    display: none;
    @media(max-width: 800px){
      display: block;
    }
  }

  .video-cut-top-bottom{
    /* margin-top: -10%;
    margin-bottom: -10%;
    margin-left: -16.5%;
    @media(max-width: 1600px){
      margin-left: -17.5%;
    }
    @media(max-width: 1200px){
      margin-left: -18.5%;
    }
    @media(max-width: 800px){
      margin-top: -10%;
      margin-bottom: -40%;
      margin-left: -15%;
      margin-right: -15%;
    } */
    @media(max-width: 800px){
      margin-top: -10%;
      
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
    @media(max-width: 800px){
      width: 100%;
      top: auto;
      height: 30%;
      background-color: rgba(0,0,0,0.6);
    }
    &::after{
      content: '';
      position: absolute;
      z-index: 10;
      background-image: linear-gradient(to right,#000,transparent);
      top: 0;
      bottom: 0;
      left: 100%;
      width: 275px;
      @media(max-width: 800px){
        background-image: linear-gradient(transparent, rgba(0,0,0,0.6));
        left: 0;
        right: 0;
        top: auto;
        bottom: 100%;
        width: 100%;
        height: 150px;
      }
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
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      .btn-action-solid{
        background-color: white;
      }
      .btn-action-transparent{
        background-color: rgba(255,255,255,0.3);
        color: white;
      }
      .btn-icon{
        width: 2.4rem;
        height: 2.4rem;
      }
      .btn-text{
        font-size: 1.3vw;
        line-height: 1;
        font-weight: bold;
        @media(max-width: 1400px){
          font-size: 1.8vw;
        }
        @media(max-width: 800px){
          font-size: 18px;
        }

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
      @media(max-width: 1400px){
        font-size: 1.35vw;
      }
      @media(max-width: 900px){
        font-size: 14px;
      }
      .supplemental{
        font-size: 1.6vw;
        font-weight: 700;
        transition: color 1s cubic-bezier(.165,.84,.44,1);
        text-shadow: 2px 2px 4px rgba(0,0,0,.45);
        margin: 1vw 0;
        @media(max-width: 800px){
          font-size: 12px;
        }
      }
      .synopsis{
        color: #999;
      }
    }
  }
`

const Wrap = styled.div`
  overflow: hidden;
  font-family: "franklin-gothic-urw", helvetica, arial, verdana, sans-serif;

  .video-proportion-16by9{
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    iframe,
    video{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }
  .video-proportion-9by16{
    position: relative;
    height: 0;
    padding-bottom: 178%;
    overflow: hidden;
    iframe,
    video{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }
`

const WrapMenu = styled.div`
  background-color: #242423;
  position: relative;
  z-index: 4;
  padding-bottom: 4vw;
  .hero-chapters{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 18px 4% 12px 4%;
    img{
      max-width: 100%;
      display: block;
    }
    &:hover{
      .chapter{
        transform: scale(0.9) translate3d(0px, 0px, 0px); 
        opacity: 0.8;
      }
    }
    .chapter{
      transition: all .4s cubic-bezier(.665,.235,.265,.8) 0s;
      transform-origin: center center; 
      background-color: black;
      border-radius: 10px;
      overflow: hidden;

      &:nth-of-type(3n+1){
        transform-origin: left center; 
        @media(max-width: 800px){
          transform-origin: center center; 
        }
      }
      &:nth-of-type(3n+0){
        transform-origin: right center; 
        @media(max-width: 800px){
          transform-origin: center center; 
        }
      }
      &:hover{
        transform: scale(1.4) translate3d(0px, 0px, 0px); 
        z-index: 4;
        opacity: 1;
        @media(max-width: 800px){
          transform: scale(1.1) translate3d(0px, 0px, 0px); 
        }
        a{
          .chapter-iframe{
            opacity: 1;
          }
          .chapter-img{
            opacity: 0;
          }
          .chapter-info{
            opacity: 0;
          }
        }
      }

      .chap-wrap{
        display: block;
        position: relative;
        color: white;
        text-decoration: none;
        text-align: center;
        overflow: hidden;
        &.soon{
          img{
            filter: grayscale(100%);
          }
        }
        .chapter-img{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          width: 42%;
          transition: all .3s;
          transition-delay: 1s;
          @media(max-width: 800px){
            width: 100%;
            position: relative;
          }
        }
        .chapter-info{
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          padding: 0.5vw;
          z-index: 3;
          width: 58%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s;
          transition-delay: 1s;
          @media(max-width: 800px){
            width: 100%;
            align-items: flex-end;
          }
        }
        h3{
          font-size: 1.4vw;
          line-height: 1;
          font-family: "franklin-gothic-urw", helvetica, arial, verdana, sans-serif;
          font-weight: normal;
          @media(max-width: 800px){
            font-size: 13px;
            padding: 0 1rem;
          }
        }
        p{
          font-size: 1vw;
          line-height: 1;
          @media(max-width: 800px){
            font-size: 11px;
            padding: 0 1rem;
          }
        }
        .chapter-iframe{
          overflow: hidden;
          opacity: 0;
          transition: all .3s;
          transition-delay: 1s;
          @media(max-width: 800px){
            display: none;
          }
        }
      }
    }
  }

  
`

export { Wrap, WrapVideo, WrapMenu }