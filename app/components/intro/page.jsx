'use client'
import react,{useState, useEffect} from "react";

function Intro() {
    const phrases = [
        "custom websites",
        "graphic design",
        "Digital marketing",
       
    ]
    

    const[text , setText] = useState('')
    const[index, setIndex] = useState(0)
    const[isDeleting, setIsDeleting] = useState(false)
    const[speed, setSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
          const currentPhrase = phrases[index % phrases.length];
          setText(isDeleting ? currentPhrase.substring(0, text.length - 1) : currentPhrase.substring(0, text.length + 1));
          
          if (!isDeleting && text === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => prevIndex + 1);
          }
        };
    
        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
      }, [text, isDeleting, index, speed, phrases]);
    
    return ( 
    <div className="font-bold relative">
        <div className="" style={{height:'80vh'}}>
            <div className="mt-20 ml-4 text-5xl text-gray-100 ">
             LET'S BUILD, IMPROVE, AND <br/>SCALE YOUR BRAND
             
            </div>
            <div className="pt-4 text-2xl mt-16">
            <span className="ml-4 text-gray-100  ">
             
            {text}
            <span className="animate-blink">|</span>
             </span>
             <p className="text-lg text-center content-center mx-4 mt-8 text-gray-200 lg:mt-32
             ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione dignissimos tempora facilis recusandae ad error voluptate earum voluptatum cumque mollitia rem itaque velit natus ut provident dolorem, deleniti soluta doloribus excepturi, sapiente cupiditate. Saepe incidunt ut eligendi, voluptate autem sit nulla sunt error accusamus. Doloremque at voluptatem modi accusamus dolorem inventore tempora veniam voluptatum velit, temporibus veritatis maxime minima perspiciatis et aspernatur corporis, architecto ipsum dignissimos. Quibusdam quod cupiditate quo adipisci? Esse, sit saepe delectus voluptas voluptatibus, accusamus soluta quas doloribus adipisci exercitationem, fugit optio quo veniam hic perspiciatis?</p>
            </div>
        </div>
        
    </div> 
    );
}

export default Intro;