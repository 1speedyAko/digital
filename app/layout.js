import "./globals.css";
import Navbar from "./components/nav/page";
import Body from "./components/Body/page";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased theme`}
      >
        <Navbar/>
     
       
        {children}
    
      </body>
    </html>
  );
}
