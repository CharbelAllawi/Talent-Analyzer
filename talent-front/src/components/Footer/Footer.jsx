import React from 'react'
import "./style.css"
import logo from '../../assets/navlogo.svg'
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t, i18n] = useTranslation("global");

  return (
    <div class="pg-footer">
      <footer class="footer">
        <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-logo">
              <a class="footer-logo-link" href="#">
                <span class="hidden-link-text"></span>
                <img src={logo}></img>
              </a>
            </div>
            <div class="footer-menu">
              <h2 class="footer-menu-name"> {t("footer.getstarted")}</h2>
              <ul id="menu-get-started" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">{t("footer.start")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">{t("footer.documentation")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">{t("footer.installation")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> {t("footer.company")}</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.contact")}</a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">{t("footer.news")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.careers")}</a>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <h2 class="footer-menu-name"> {t("footer.legal")}</h2>
              <ul id="menu-legal" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">{t("footer.privacynotice")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.termsofuse")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> {t("footer.quicklink")}</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">{t("footer.supportcenter")}</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">{t("footer.servicestatus")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.security")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.blog")}</a>
                </li>
                <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">{t("footer.customers")}</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">{t("footer.reviews")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> {t("footer.chat")}</h2>
              <p class="footer-call-to-action-description"> {t("footer.support")}</p>
              <a class="footer-call-to-action-button button" href="#" target="_self"> {t("footer.intouch")} </a>
            </div>
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> {t("footer.callus")}</h2>
              <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self"> ©2023. | Developed By: Charbel Allawi. | All rights reserved. </a>
            </p>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Footer