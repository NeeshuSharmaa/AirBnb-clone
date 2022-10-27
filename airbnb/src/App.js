import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data.js";

//via props
// export default function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Hero/>
//       <div className='card-container'>
//         <Card 
//           img="katie-zaferes.png"
//           title="Life Lessons with Katie Zaferes"
//           rating="5.0"
//           count={6}
//           country="USA"
//           price={136}
//         />
//         <Card
//           img="wedding-photography.png"
//           title="Learn Wedding Photography"
//           rating="5.0"
//           count={30}
//           country="USA"
//           price={125}
//         />
//         <Card
//           img="mountain-bike.png"
//           title="Group Mountain Biking"
//           rating="4.8"
//           count={2}
//           country="USA"
//           price={50}
//         />
//       </div>
      
//     </div>
//   );
// }

export default function App() {
  const cards=data.map(item=>{
    return (
            <Card
              img={item.coverImg}
              title={item.title}
              rating={item.stats.rating}
              count={item.stats.reviewCount}
              price={item.price}
            />
           )  

  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  );
}