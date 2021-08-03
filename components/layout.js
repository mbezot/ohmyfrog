import Footer from './footer'
import Navbar from './navigation'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;