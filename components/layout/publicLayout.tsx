import Navbar from "../nav/navbar"

const PublicLayout = ({ children, transparentBg, hostLogo, beta }: any) => {
  return (
    <div style={{backgroundColor: transparentBg ? '#111' : 'white'}}>
      <Navbar transparentBg={transparentBg} hostLogo={hostLogo} beta={beta}/>
      {children}
    </div>
  )
}
export default PublicLayout;