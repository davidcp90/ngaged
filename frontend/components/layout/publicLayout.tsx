import Navbar from "../nav/navbar"

const PublicLayout = ({ children, transparentBg }: any) => {
  return (
    <div style={{backgroundColor: transparentBg ? '#111' : 'white'}}>
      <Navbar transparentBg={transparentBg} />
      {children}
    </div>
  )
}
export default PublicLayout;