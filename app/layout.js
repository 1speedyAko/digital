import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Body from "./components/Body/page";
import Footer from "./components/footer/Footer";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased theme`}
      >
        <Navbar/>
     
       
        {children}
      <Footer/>
      </body>
    </html>
  );
}
