import React from "react";
import { StCustomWidget, Body } from "./style.css";

const CustomWidget = () => {
  return (
    <StCustomWidget>
      <div class="elheader">
        <div class="ajana">
          <h4>
            <a
              href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera"
              target="_blank"
            >
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YEORTMYWERBVJKWJNS37LW5HHQ.png" />
            </a>
          </h4>
        </div>
        <div class="aj">
          <p>
            <small>Una producción de:</small>
          </p>
          <a
            href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera"
            target="_blank"
          >
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/T3HDY3CRJJCVXCITSHPHALXUWM.png"
              alt="Laboratorio de Contenidos de Marca - La Tercera"
              pinger-seen="true"
            />
          </a>
        </div>
      </div>

      <Body>
        <div class="card | align_items_start border-right bg-verde x-lg-3 relative width_full">
          <div>
            <a
              href="https://especiales.latercera.com/andar-juntas/?utm_source=widgetvideo&amp;utm_medium=latercera"
              target="_blank"
              class="w100b"
            >
              <iframe
                allowfullscreen="true"
                class="embed-responsive-item"
                src="https://rudo.video/vod/bLoWhJ?stv=0&amp;volume=0"
              ></iframe>
            </a>
          </div>

          <div class="headline | width_full">
            <h3 class="">
              <a
                href="https://especiales.latercera.com/andar-juntas/?utm_source=widgetvideo&amp;utm_medium=latercera"
                target="_blank"
              >
                <span class="ltpicto-circle-play"></span> Un manifiesto skater:
                descubre el especial
              </a>
            </h3>
          </div>
        </div>

        <article class="card | align_items_start x-lg-2 x-md-6 regular bg-amarillo border-right relative width_full border-none">
          <div class="art-container image_marcador_headline">
            <div class="image | relative">
              <figure>
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte1"
                  class="link | color_inherit display_inline_block width_full"
                >
                  <picture>
                    <img
                      type="image/jpg"
                      src="https://www.latercera.com/resizer/JoWn4Ldur1g0baspvVhAA72a2zY=/640x480/smart/filters:quality(70):no_upscale()//cloudfront-us-east-1.images.arcpublishing.com/copesa/EIPIRPOFOFCX7A3KZVUX3FRZAY.jpg"
                    />{" "}
                  </picture>
                </a>
              </figure>
            </div>
            <div class="headline | width_full">
              <h3 class="">
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte1"
                  target="_blank"
                >
                  {" "}
                  Parte I: Arriba y abajo de la tabla
                </a>
              </h3>
            </div>
          </div>
        </article>

        <article class="card | align_items_start x-lg-2 x-md-6 regular bg-naranjo border-right relative width_full border-none">
          <div class="art-container image_marcador_headline">
            <div class="image | relative">
              <figure>
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte2"
                  class="link | color_inherit display_inline_block width_full"
                >
                  <picture>
                    <img
                      type="image/jpg"
                      src="https://www.latercera.com/resizer/NLnUQLh0bsGAzwIALcXhednESBw=/640x480/smart/filters:quality(70):no_upscale()//cloudfront-us-east-1.images.arcpublishing.com/copesa/MBL3T3L32BHCFLY47QV7LFLB5E.jpg"
                    />{" "}
                  </picture>
                </a>
              </figure>
            </div>
            <div class="headline | width_full">
              <h3 class="">
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte2"
                  target="_blank"
                >
                  {" "}
                  Parte II: La Crew
                </a>
              </h3>
            </div>
          </div>
        </article>

        <article class="card | align_items_start x-lg-2 x-md-6 regular bg-morado relative width_full border-none">
          <div class="art-container image_marcador_headline">
            <div class="image | relative">
              <figure>
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte3"
                  class="link | color_inherit display_inline_block width_full"
                >
                  <picture>
                    <img
                      type="image/jpg"
                      src="https://www.latercera.com/resizer/JsGD9RQYxPC6Zk-qA3j7eK-bkSQ=/640x480/smart/filters:quality(70):no_upscale()//cloudfront-us-east-1.images.arcpublishing.com/copesa/CWPY7EDGMRFKBCQEYWMRWQATFA.jpg"
                    />{" "}
                  </picture>
                </a>
              </figure>
            </div>
            <div class="headline | width_full">
              <h3 class="">
                <a
                  href="https://especiales.latercera.com/andar-juntas/?utm_source=widget&amp;utm_medium=latercera#parte3"
                  target="_blank"
                >
                  {" "}
                  Parte III: Unidas 360°
                </a>
              </h3>
            </div>
          </div>
        </article>
      </Body>
    </StCustomWidget>
  );
};

export default CustomWidget;
