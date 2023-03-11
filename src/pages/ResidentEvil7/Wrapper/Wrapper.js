/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Wrapper/Wrapper.module.scss'

import IMGFrame from '../../../images/ResidentEvil7/main_img_frame.png'
import IMGLogo from '../../../images/ResidentEvil7/logo.png'
import IMGVillage from '../../../images/ResidentEvil7/bnr_village-ge.jpg'
import IMGBnr from '../../../images/ResidentEvil7/bnr_220303.jpg'
import IMGErsb from '../../../images/ResidentEvil7/icon_esrb.gif'

import IMGPsAwardGold from '../../../images/ResidentEvil7/psAward_gold.png'
import IMGPsAwardVr from '../../../images/ResidentEvil7/psAward_vr.png'
import IMGPsAwardUser from '../../../images/ResidentEvil7/psAward_user.png'
import IMGPsAwardJoystick from '../../../images/ResidentEvil7/golden_joysticks award_vr.png'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Fade from 'react-reveal/Fade';

function Wrapper() {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, []); 

  return (
    <div className={styles.wrapper}>
    <nav>
      <ul>
        <li className={styles.current}>
          <a>TOP</a>
        </li>
        <li>
          <a>ABOUT</a>
        </li>
        <li>
          <a>MEDIA</a>
        </li>
        <li>
          <a>DEMO</a>
        </li>
        <li>
          <a>GAMEPLAY</a>
        </li>
        <li>
          <a>DLC</a>
        </li>
        <li>
          <a>PRODUCTS</a>
        </li>
        <li className={styles.goldeditonLink}>
          <a>GOLD EDITION</a>
        </li>
      </ul>
    </nav>
      <main data-aos="fade"  className={styles.top}>
        <section data-aos="fade"  className={styles.mainVisual}>
          <div className={styles.bgArea}>
            <div className={styles.bgAreaInner}>
              <img src={IMGFrame} alt="" />
              <Fade duration={2500}>
                <span className={styles.mainImg_secondAnime}></span>
              </Fade>
              <Fade duration={1800}>
                <span id="mainImg02" className={styles.mainImg_thirdAnime}></span>
              </Fade>
              <Fade duration={2100}>
                <span id="mainImg03" className={styles.mainImg_fourthAnime}></span>
              </Fade>
              <fade duration={2300}>
                <span id="mainImg04" className={styles.mainImg_fifthAnime}></span>
              </fade>
              <Fade duration={2500}>
                <span id="mainImg05" className={styles.mainImg_sixthAnime}></span>
              </Fade>
                <span id="effectImg" className={styles.mainImg_effectImg}></span>
            </div>
          </div>

          <div data-aos="fade" className={styles.firstViewContents}>
            <div className={styles.firstViewContentsInner}>
              <p className={styles.sales}>
                <span>Over 10.6 Million Copies Shipped Worldwide!</span>
              </p>
              <div data-aos="fade" className={styles.logoArea}>
                <h1 className={styles.lead}>Available Now</h1>
                <h1>
                  <img src={IMGLogo} alt="" />
                </h1>
              </div>
              <div data-aos="fade" className={styles.topUpdate}>
                <ul className={styles.fullSizeWrap}>
                  <li className={styles.fullSize_bnrDLC}>
                    <ul className={styles.harfSizeWrap}>

                      <li data-aos="fade" className={styles.harfSize_bnrVillage}>
                        <a>
                          <figure>
                            <img src={IMGVillage} alt="" />
                            <figcaption>                              
                              Resident Evil Village Gold Edition adds 3 major new features!        
                            </figcaption>
                          </figure>
                        </a>
                      </li>

                      <li data-aos="fade" className={styles.harfSize_bnrZOE}>
                        <a>
                          <figure>
                            <img src={IMGBnr} alt="" />
                            <figcaption>                             
                              Three acclaimed titles have finally arrived on next-gen consoles with
                             
                              upgrades!                          
                            </figcaption>
                          </figure>
                        </a>
                      </li>

                    </ul>
                  </li>
                  <li className={styles.news}>
                    <a className={styles.newsModal_cboxElement}>
                      <span className={styles.text}>
                        Resident Evil 7: 4K for Xbox One X! Free update available!
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.update}>
          <div className={styles.updateListWrap}>
            <div className={styles.updateList}>
              <ul className={styles.clearfix}>
                <li className={styles.list_btn}>
                  <span className={styles.date}>10/19/2022 </span>
                  <span className={styles.text}>About the closure of Stadia servers </span>
                <p className={styles.btn}></p>
                </li>
              </ul>

              <ul className={styles.clearfix}>
                <li className={styles.list_btn}>
                  <span className={styles.date}>6/15/2022 </span>
                  <span className={styles.text}>Notice regarding Resident Evil 7 biohazard obtained from the 
                  <br>
                  </br>
                  PlayStation®Plus Collection </span>
                <p className={styles.btn}></p>
                </li>
              </ul>

              <ul className={styles.clearfix}>
                <li className={styles.list_btn}>
                  <span className={styles.date}>12/14/2021 </span>
                  <span className={styles.text}>Version Update for Resident Evil 7 Biohazard </span>
                <p className={styles.arrow}></p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.spec}>
          <div className={styles.inner}>
            <h2>Game Info</h2>
            <div className={styles.right}>
              <ul>
                <li>
                  <span className={styles.Platforms}>Platforms</span>
                  <span className={styles.text}>
                    PlayStation®4(supports PlayStation®VR/HDR,PlayStation®4 Pro 4K/HDR),
                    <br>
                    </br>
                    Xbox One(Xbox One S HDR, Xbox One X 4K/HDR), PC (STEAM/Windows 10 UWP)
                  </span>
                </li>

                <li>
                  <span className={styles.title}>Players</span>
                  <span className={styles.text}>
                    1
                  </span>
                </li>

                <li>
                  <span className={styles.title}>Genre</span>
                  <span className={styles.text}>
                    Survivor Horror
                  </span>
                </li>

                <li>
                  <span className={styles.title}>ESRB Rating</span>
                  <span className={styles.text}>
                    <img src={IMGErsb} alt="" />
                    <br>
                    </br>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.inner_award}>
            <ul className={styles.awardList}>
              <li>
                <figure>
                  <img src={IMGPsAwardGold} alt="" />
                </figure>
              </li>

              <li>
                <figure>
                  <img src={IMGPsAwardVr} alt="" />
                </figure>
              </li>

              <li>
                <figure>
                  <img src={IMGPsAwardUser} alt="" />
                </figure>
              </li>

              <li>
                <figure>
                  <img src={IMGPsAwardJoystick} alt="" />
                </figure>
              </li>
            </ul>
          </div>

          <ul className={styles.btnArea}>
            <li className={styles.btnRenet}>
              <a>RESIDENT EVIL.NET</a>
            </li>

            <li className={styles.btnManual}>
              <a>Official Web Manual</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Wrapper