import './App.css';
import { AiFillStar,AiOutlineShoppingCart } from 'react-icons/ai';

function App() {
  return (
   <div className='card'>
    <div className='basicInfo'>
      <div className='title'></div>
      <div className='category'>Butterfly Knife</div>
      <div className='info'>Highest Price</div>
    <div className='images'>
      <div className='img'>
        <div className='item'>
          <input type="radio" name="color" id="emerald"></input>
          <img src ="/imgs/emerald.png"></img>
        </div>
        <div className='item'>
          <input type="radio" name="color" id="sapphire"></input>
          <img src ="/imgs/sapphire.png"></img>
        </div>
      </div>
    </div>
    <div class="colors">
    <label for="emerald">
      <div class="name">Emerald</div>
      <div class="ellipse1" ></div>
    </label>
    <label for="sapphire">
      <div class="name">Sapphire</div>
      <div class="ellipse2"></div>
    </label>  
    </div>
    <div className='addToCart'>
      <i><AiOutlineShoppingCart/></i>
    </div>
    </div>
    <div className='mores'>
      <div className='stars'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      </div>
      <div className='price'>10000 €</div>
    </div>
   </div>
  );
}

export default App;
