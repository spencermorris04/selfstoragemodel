import dynamic from 'next/dynamic'

import Instructions from '@/components/dom/Instructions'
import SelfStorageBestModel from '@/components/canvas/Selfstoragebestmodel';

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <Instructions>
      This is a simple example of a unit selection system{' '}
    </Instructions>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <SelfStorageBestModel scale={0.2} route='/SelfStorageBestModel' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Self Storage' } }
}
