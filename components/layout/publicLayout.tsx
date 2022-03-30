import Navbar from "../nav/navbar"

const PublicLayout = ({ children, transparentBg, hostLogo }: any) => {
  return (
    <div style={{backgroundColor: transparentBg ? '#111' : 'white'}}>
      <Navbar transparentBg={transparentBg} hostLogo={hostLogo}/>
      {children}
    </div>
  )
}
export default PublicLayout;