import React from 'react';
import { StyledAnchor, StyledGrid } from './styles';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Grid } from '@material-ui/core';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const containerStyleDesktop :React.CSSProperties = {
  width: '50%',
  height: '100%',
  position: 'relative'
};
const containerStyleMobile :React.CSSProperties = {
  width: '100vw',
  height: '200px',
  position: 'relative'
};

const Footer: React.FC = () => {
  const {width} = useWindowDimensions();
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  // })
  return (
    <StyledGrid container>
      <Grid style={{textAlign:'center'}} item xs={12} >
        <h3>Redes Sociais</h3>
        <StyledAnchor
          href="https://www.instagram.com/planetarioufsm/">
            <FaInstagram/>
        </StyledAnchor>
        <StyledAnchor
          href="https://www.facebook.com/planetarioufsm1/">
            <FaFacebook/>
        </StyledAnchor>
      </Grid>
      <Grid style={{textAlign:'right',paddingRight:'1em'}} item md={6} xs={12}>
        <h3>Localização</h3>
        <p>Praça Santos Dumont, Prédio 45</p>
        <p>Cidade Universitária</p>
        <p>Bairro Camobi</p>
        <p>Santa Maria - RS</p>
        <p>CEP: 97105-900</p>
        <p>+55 (55) 3220-8226</p>
        <p>planetario@ufsm.br</p>
      </Grid>
      <Grid item md={6} xs={12} >
        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
          <GoogleMap
          mapContainerStyle={width< 960 ? containerStyleMobile : containerStyleDesktop}
          zoom={15}
          center={{ lat: -29.7200449, lng: -53.7172921 }}
          >
            <Marker position={{ lat: -29.7200449, lng: -53.7172921 }} />
          </GoogleMap>
        </LoadScript>
      </Grid>
    </StyledGrid>
  );
};

export default Footer;
