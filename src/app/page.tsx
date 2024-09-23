'use client'

import dynamic  from "next/dynamic";

const DynamicMenu = dynamic(() => import('../components/Menu'));

const Home: React.FC = () => {
  return (
    <>
      <DynamicMenu />
      <h1>Patinando Todos Los Marditos Dias</h1>
      <h2>Las Ideas más innovadoras para tu negocio</h2>
    </>
  )
}

export default Home;