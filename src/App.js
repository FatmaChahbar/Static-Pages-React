import logo from './logo.svg';
import './App.css';
function Header(){
  return( <><header >

    <nav className='Nav'>
      <img className='image' src={logo}/>   
      <h1> Learning React</h1>
      <ul className='Nav-item'>
        <li>Pricing </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </header></>  )

}
function MainContent(){
  return(<><h1> the Reasens that I Prefer Learning React</h1>
  <ul>
    <li>I'm more likely to get a job as developer if I know React</li>
    <li>I found it so easy and I enjoy Learning it </li>
    <li>Try New Things like developing Web Pages , and it's popular library</li>
  </ul>
  </>)
}
function Footer(){
 return (<footer className='footer' > <small > @ Fatma CHAHBAR development, all rightd reserved.</small></footer>
)
}
function App() {
  return (
    <div >
   <Header/>
   <MainContent/>
   <Footer />

      
    </div>
  );
}

export default App;
