'use client'

import dynamic  from "next/dynamic";

const DynamicMenu = dynamic(() => import('../components/Menu'));
const DynamicBranding = dynamic(() => import('../components/Branding'));
const DynamicWeb = dynamic(() => import('../components/WebDeveloper'));
const DynamicAudio = dynamic(() => import('../components/Audiovisual'));
const DynamicSocial = dynamic(() => import('../components/SocialMedia'));
const DynamicImpresion = dynamic(() => import('../components/Impresion'));

const Home: React.FC = () => {
  return (
    <>
      <DynamicMenu />
      <h1>Las Ideas más innovadoras para tu negocio</h1>
      <DynamicBranding />
      <DynamicWeb />
      <DynamicAudio />
      <DynamicSocial />
      <DynamicImpresion />
    </>
  )
}

export default Home;