import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function SideMenu({ unitInfo, onClose }) {
  return (
    <div style={{ position: 'fixed', right: 20, top: 20, background: 'white', padding: 20 }}>
      <h2>Unit Information</h2>
      <p>Unit Number: {unitInfo.number}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default function SelfStorageBestModel(props) {
  const { nodes, materials } = useGLTF('/selfstoragebestmodel.gltf')
  const [hovered, setHovered] = useState(Array(23).fill(false))

  const redMaterial = materials['Unit1'].clone()
  redMaterial.color = new THREE.Color('red')

  const handlePointerEnter = (index) => {
    const newHovered = [...hovered]
    newHovered[index] = true
    setHovered(newHovered)
  }

  const handlePointerLeave = (index) => {
    const newHovered = [...hovered]
    newHovered[index] = false
    setHovered(newHovered)
  }
  const [sideMenuInfo, setSideMenuInfo] = useState(null)

  const handleUnitClick = (index) => {
    // You can replace the data inside the object with the actual unit data
    setSideMenuInfo({
      number: index + 1,
      // Add more unit information here
    })
  }

  const handleCloseSideMenu = () => {
    setSideMenuInfo(null)
  }
  return (
    <>
      {sideMenuInfo && <SideMenu unitInfo={sideMenuInfo} onClose={handleCloseSideMenu} />}
      <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.26}>
        <mesh geometry={nodes.selfstoragebestmodel_1.geometry} material={materials._5} />
        <mesh geometry={nodes.selfstoragebestmodel_2.geometry} material={materials.FrontColor} />
        <mesh geometry={nodes.selfstoragebestmodel_3.geometry} material={materials._3} />
        <mesh geometry={nodes.selfstoragebestmodel_4.geometry} material={materials._4} />
        <mesh geometry={nodes.selfstoragebestmodel_5.geometry} material={materials.Vegetation_Grass_Artificial} />
        <mesh geometry={nodes.selfstoragebestmodel_6.geometry} material={materials.Brick_Antique} />
        <mesh geometry={nodes.selfstoragebestmodel_7.geometry} material={materials._1} />
        <mesh geometry={nodes.selfstoragebestmodel_8.geometry} material={materials.Asphalt_New} />
        <mesh geometry={nodes.selfstoragebestmodel_9.geometry} material={materials._Metal_Corrogated_Shiny_1} />
        <mesh geometry={nodes.selfstoragebestmodel_10.geometry} material={materials._Charcoal_} />
        <mesh geometry={nodes.selfstoragebestmodel_11.geometry} material={materials.Carpet_Berber_Pattern_Gray} />
        <mesh geometry={nodes.selfstoragebestmodel_12.geometry} material={materials._Silver_} />
        <mesh geometry={nodes.selfstoragebestmodel_13.geometry} material={materials.Wood_Cherry_Original} />
        <mesh geometry={nodes.selfstoragebestmodel_14.geometry} material={materials._Gray3_} />
        <mesh geometry={nodes.selfstoragebestmodel_15.geometry} material={materials._Gray5_} />
        <mesh geometry={nodes.selfstoragebestmodel_16.geometry} material={materials._CorrogateShiny_2} />
        <mesh geometry={nodes.selfstoragebestmodel_17.geometry} material={materials.keyboard_laptop} />
        <mesh geometry={nodes.selfstoragebestmodel_18.geometry} material={materials._18} />
        <mesh geometry={nodes.selfstoragebestmodel_19.geometry} material={materials._Concrete_rough_} />
        <mesh geometry={nodes.selfstoragebestmodel_20.geometry} material={materials.vvvvvvvdeep_red} />
        <mesh geometry={nodes.selfstoragebestmodel_21.geometry} material={materials._White_} />
        <mesh geometry={nodes.selfstoragebestmodel_22.geometry} material={materials._Orange_} />
        <mesh geometry={nodes.selfstoragebestmodel_23.geometry} material={materials._Gray6_} />
        <mesh geometry={nodes.selfstoragebestmodel_24.geometry} material={materials._Gainsboro_} />
        <mesh geometry={nodes.selfstoragebestmodel_25.geometry} material={materials._Gray_Glass_} />
        <mesh geometry={nodes.selfstoragebestmodel_26.geometry} material={materials._WhiteSmoke_} />
        <mesh geometry={nodes.selfstoragebestmodel_27.geometry} material={materials.Brake_Light_Red} />
        <mesh geometry={nodes.selfstoragebestmodel_28.geometry} material={materials._10} />
        <mesh geometry={nodes.selfstoragebestmodel_29.geometry} material={materials._12} />
        <mesh geometry={nodes.selfstoragebestmodel_30.geometry} material={materials._Charcoal_2} />
        <mesh geometry={nodes.selfstoragebestmodel_31.geometry} material={materials._Gainsboro_1} />
        <mesh geometry={nodes.selfstoragebestmodel_32.geometry} material={materials._9} />
        <mesh geometry={nodes.selfstoragebestmodel_33.geometry} material={materials._Glass_Gold_Tint_1} />
        <mesh geometry={nodes.selfstoragebestmodel_34.geometry} material={materials._8} />
        <mesh geometry={nodes.selfstoragebestmodel_35.geometry} material={materials._DarkGoldenrod_} />
        <mesh geometry={nodes.selfstoragebestmodel_36.geometry} material={materials.jean_blue} />
        <mesh geometry={nodes.selfstoragebestmodel_37.geometry} material={materials._Redwood_} />
        <mesh geometry={nodes.selfstoragebestmodel_38.geometry} material={materials._Beige_1} />
        <mesh geometry={nodes.selfstoragebestmodel_39.geometry} material={materials._Brown_} />
        <mesh geometry={nodes.selfstoragebestmodel_40.geometry} material={materials._Black_} />
        <mesh geometry={nodes.selfstoragebestmodel_41.geometry} material={materials._14} />
        <mesh geometry={nodes.selfstoragebestmodel_42.geometry} material={materials._Metal_Rough_1} />
        <mesh geometry={nodes.selfstoragebestmodel_43.geometry} material={materials._Translucent_Glass_Sky_Reflection_1} />
        <mesh geometry={nodes.selfstoragebestmodel_44.geometry} material={materials._DarkGreen_} />
        <mesh geometry={nodes.selfstoragebestmodel_45.geometry} material={materials.Roofing_Metal_Standing_Seam_Red} />
        <mesh geometry={nodes.selfstoragebestmodel_46.geometry} material={materials.Metal_Rusted} />
        <mesh geometry={nodes.selfstoragebestmodel_47.geometry} material={materials.Metal_Steel_Textured_White} />
        <mesh geometry={nodes.selfstoragebestmodel_48.geometry} material={materials._DarkGreen_} />
        <mesh geometry={nodes.selfstoragebestmodel_49.geometry} material={materials._SaddleBrown_} />
        <mesh geometry={nodes.selfstoragebestmodel_50.geometry} material={materials._Tan_} />
        <mesh geometry={nodes.selfstoragebestmodel_51.geometry} material={materials._Sienna_} />
        <mesh geometry={nodes.selfstoragebestmodel_52.geometry} material={materials._Light_Oliv_} />
        <mesh geometry={nodes.selfstoragebestmodel_53.geometry} material={materials._LightGrey_} />
        <mesh geometry={nodes.selfstoragebestmodel_54.geometry} material={materials._Red_} />
        <mesh geometry={nodes.selfstoragebestmodel_55.geometry} material={materials._ForestGreen_} />
        <mesh geometry={nodes.selfstoragebestmodel_56.geometry} material={materials.pino_1} />
        <mesh geometry={nodes.selfstoragebestmodel_57.geometry} material={materials.pino_03} />
        <mesh geometry={nodes.selfstoragebestmodel_58.geometry} material={materials.Unit_1} />
      </group>
      <group position={[86.8, -1.52, -216.45]} scale={[11.16, 11.31, 10.96]}>
        <mesh geometry={nodes.Plane_1.geometry} material={hovered[0] ? redMaterial : materials['Unit1']} onPointerEnter={() => handlePointerEnter(0)} onPointerLeave={() => handlePointerLeave(0)} onPointerDown={() => handleUnitClick(0)} />
        <mesh geometry={nodes.Plane_2.geometry} material={hovered[1] ? redMaterial : materials['Unit2']} onPointerEnter={() => handlePointerEnter(1)} onPointerLeave={() => handlePointerLeave(1)} onPointerDown={() => handleUnitClick(1)} />
        <mesh geometry={nodes.Plane_3.geometry} material={hovered[2] ? redMaterial : materials['Unit3']} onPointerEnter={() => handlePointerEnter(2)} onPointerLeave={() => handlePointerLeave(2)} onPointerDown={() => handleUnitClick(2)} />
        <mesh geometry={nodes.Plane_4.geometry} material={hovered[3] ? redMaterial : materials['Unit4']} onPointerEnter={() => handlePointerEnter(3)} onPointerLeave={() => handlePointerLeave(3)} onPointerDown={() => handleUnitClick(3)} />
        <mesh geometry={nodes.Plane_5.geometry} material={hovered[4] ? redMaterial : materials['Unit5']} onPointerEnter={() => handlePointerEnter(4)} onPointerLeave={() => handlePointerLeave(4)} onPointerDown={() => handleUnitClick(4)} />
        <mesh geometry={nodes.Plane_6.geometry} material={hovered[5] ? redMaterial : materials['Unit6']} onPointerEnter={() => handlePointerEnter(5)} onPointerLeave={() => handlePointerLeave(5)} onPointerDown={() => handleUnitClick(5)} />
        <mesh geometry={nodes.Plane_7.geometry} material={hovered[6] ? redMaterial : materials['Unit7']} onPointerEnter={() => handlePointerEnter(6)} onPointerLeave={() => handlePointerLeave(6)} onPointerDown={() => handleUnitClick(6)} />
        <mesh geometry={nodes.Plane_8.geometry} material={hovered[7] ? redMaterial : materials['Unit8']} onPointerEnter={() => handlePointerEnter(7)} onPointerLeave={() => handlePointerLeave(7)} onPointerDown={() => handleUnitClick(7)} />
        <mesh geometry={nodes.Plane_9.geometry} material={hovered[8] ? redMaterial : materials['Unit9']} onPointerEnter={() => handlePointerEnter(8)} onPointerLeave={() => handlePointerLeave(8)} onPointerDown={() => handleUnitClick(8)} />
        <mesh geometry={nodes.Plane_10.geometry} material={hovered[9] ? redMaterial : materials['Unit10']} onPointerEnter={() => handlePointerEnter(9)} onPointerLeave={() => handlePointerLeave(9)} onPointerDown={() => handleUnitClick(9)} />
        <mesh geometry={nodes.Plane_11.geometry} material={hovered[10] ? redMaterial : materials['Unit11']} onPointerEnter={() => handlePointerEnter(10)} onPointerLeave={() => handlePointerLeave(10)} onPointerDown={() => handleUnitClick(10)} />
        <mesh geometry={nodes.Plane_12.geometry} material={hovered[11] ? redMaterial : materials['Unit12']} onPointerEnter={() => handlePointerEnter(11)} onPointerLeave={() => handlePointerLeave(11)} onPointerDown={() => handleUnitClick(11)} />
        <mesh geometry={nodes.Plane_13.geometry} material={hovered[12] ? redMaterial : materials['Unit13']} onPointerEnter={() => handlePointerEnter(12)} onPointerLeave={() => handlePointerLeave(12)} onPointerDown={() => handleUnitClick(12)} />
        <mesh geometry={nodes.Plane_14.geometry} material={hovered[13] ? redMaterial : materials['Unit14']} onPointerEnter={() => handlePointerEnter(13)} onPointerLeave={() => handlePointerLeave(13)} onPointerDown={() => handleUnitClick(13)} />
        <mesh geometry={nodes.Plane_15.geometry} material={hovered[14] ? redMaterial : materials['Unit15']} onPointerEnter={() => handlePointerEnter(14)} onPointerLeave={() => handlePointerLeave(14)} onPointerDown={() => handleUnitClick(14)} />
        <mesh geometry={nodes.Plane_16.geometry} material={hovered[15] ? redMaterial : materials['Unit16']} onPointerEnter={() => handlePointerEnter(15)} onPointerLeave={() => handlePointerLeave(15)} onPointerDown={() => handleUnitClick(15)} />
        <mesh geometry={nodes.Plane_17.geometry} material={hovered[16] ? redMaterial : materials['Unit17']} onPointerEnter={() => handlePointerEnter(16)} onPointerLeave={() => handlePointerLeave(16)} onPointerDown={() => handleUnitClick(16)} />
      </group>
      <group position={[86.8, -1.52, -805.5]} scale={[11.16, 11.31, 10.96]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={hovered[17] ? redMaterial : materials['Unit20']} onPointerEnter={() => handlePointerEnter(17)} onPointerLeave={() => handlePointerLeave(17)} onPointerDown={() => handleUnitClick(17)} />
        <mesh geometry={nodes.Plane001_2.geometry} material={hovered[18] ? redMaterial : materials['Unit21']} onPointerEnter={() => handlePointerEnter(18)} onPointerLeave={() => handlePointerLeave(18)} onPointerDown={() => handleUnitClick(18)} />
        <mesh geometry={nodes.Plane001_3.geometry} material={hovered[19] ? redMaterial : materials['Unit22']} onPointerEnter={() => handlePointerEnter(19)} onPointerLeave={() => handlePointerLeave(19)} onPointerDown={() => handleUnitClick(19)} />
        <mesh geometry={nodes.Plane001_4.geometry} material={hovered[20] ? redMaterial : materials['Unit23']} onPointerEnter={() => handlePointerEnter(20)} onPointerLeave={() => handlePointerLeave(20)} onPointerDown={() => handleUnitClick(20)} />
        <mesh geometry={nodes.Plane001_5.geometry} material={hovered[21] ? redMaterial : materials['Unit24']} onPointerEnter={() => handlePointerEnter(21)} onPointerLeave={() => handlePointerLeave(21)} onPointerDown={() => handleUnitClick(21)} />
        <mesh geometry={nodes.Plane001_6.geometry} material={hovered[22] ? redMaterial : materials['Unit25']} onPointerEnter={() => handlePointerEnter(22)} onPointerLeave={() => handlePointerLeave(22)} onPointerDown={() => handleUnitClick(22)} />
        <mesh geometry={nodes.Plane001_7.geometry} material={hovered[23] ? redMaterial : materials['Unit26']} onPointerEnter={() => handlePointerEnter(23)} onPointerLeave={() => handlePointerLeave(23)} onPointerDown={() => handleUnitClick(23)} />
        <mesh geometry={nodes.Plane001_8.geometry} material={hovered[24] ? redMaterial : materials['Unit27']} onPointerEnter={() => handlePointerEnter(24)} onPointerLeave={() => handlePointerLeave(24)} onPointerDown={() => handleUnitClick(24)} />
        <mesh geometry={nodes.Plane001_9.geometry} material={hovered[25] ? redMaterial : materials['Unit28']} onPointerEnter={() => handlePointerEnter(25)} onPointerLeave={() => handlePointerLeave(25)} onPointerDown={() => handleUnitClick(25)} />
        <mesh geometry={nodes.Plane001_10.geometry} material={hovered[26] ? redMaterial : materials['Unit29']} onPointerEnter={() => handlePointerEnter(26)} onPointerLeave={() => handlePointerLeave(26)} onPointerDown={() => handleUnitClick(26)} />
        <mesh geometry={nodes.Plane001_11.geometry} material={hovered[27] ? redMaterial : materials['Unit30']} onPointerEnter={() => handlePointerEnter(27)} onPointerLeave={() => handlePointerLeave(27)} onPointerDown={() => handleUnitClick(27)} />
        <mesh geometry={nodes.Plane001_12.geometry} material={hovered[28] ? redMaterial : materials['Unit31']} onPointerEnter={() => handlePointerEnter(28)} onPointerLeave={() => handlePointerLeave(28)} onPointerDown={() => handleUnitClick(28)} />
        <mesh geometry={nodes.Plane001_13.geometry} material={hovered[29] ? redMaterial : materials['Unit32']} onPointerEnter={() => handlePointerEnter(29)} onPointerLeave={() => handlePointerLeave(29)} onPointerDown={() => handleUnitClick(29)} />
        <mesh geometry={nodes.Plane001_14.geometry} material={hovered[30] ? redMaterial : materials['Unit33']} onPointerEnter={() => handlePointerEnter(30)} onPointerLeave={() => handlePointerLeave(30)} onPointerDown={() => handleUnitClick(30)} />
      </group>
      <mesh geometry={nodes.Plane002.geometry} material={materials.Asphalt_New} position={[65.07, -1.92, -605.2]} scale={[162.75, 162.75, 686.74]} />
    </group>
  </>
  )
}

useGLTF.preload('/selfstoragebestmodel.gltf')
