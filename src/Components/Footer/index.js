  import React from 'react';
  import './index.css';

  class Footer extends React.Component{
    render(){
      return(
        <div class="footer" id="C4">
        <footer>
        <h3 class="footer-text" >About Us</h3>
        <p>Created by: Bharath S</p>
        <p>Contact information: <a href="mailto:someone@example.com">Bharath@example.com</a>.</p>
        <p>Social Medias</p>
        <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=973072061&extra_1=s|c|231346502312|e|facebook|&placement=&creative=231346502312&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D973072061%26adgroupid%3D54006406691%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D1t1%26target%3D%26targetid%3Dkwd-297690534863%26loc_physical_ms%3D9061994%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMI0JzF7qvN4wIVjIRwCh1j_wDPEAAYASAAEgJbk_D_BwE:"  class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-whatsapp"></a>
        <a href="#" class="fa fa-linkedin"></a>
        </footer>
        </div>

      );
    }
  }
  export default Footer;
