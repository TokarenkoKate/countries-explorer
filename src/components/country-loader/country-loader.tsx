import React from 'react';
import ContentLoader from "react-content-loader"

const CountryLoader = () => (
  <ContentLoader 
    speed={2}
    width='100%'
    height={60}
    viewBox="0 0 100% 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{marginTop: 20}}
  >
    <rect x="4" y="8" rx="3" ry="3" width="105" height="20" /> 
    <rect x="3" y="52" rx="3" ry="3" width="100%" height="6" /> 
    <rect x="32%" y="8" rx="3" ry="3" width="90" height="20" /> 
    <rect x="66%" y="8" rx="3" ry="3" width="90" height="20" />
  </ContentLoader>
)

export default CountryLoader
