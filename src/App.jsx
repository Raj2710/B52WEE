import React from 'react'
import Card from './components/Card'

function App() {
  // fragments - helps in grouping html elements without creating additional dom nodes
  let data = [{
    title:"Rest Countries",
    description:`This project is inspired on restcountries.eu by Fayder Florez. Although the original project has now moved to a subscription base API, this project is still Open Source and Free to use.`,
    url:"https://restcountries.com/"
  },
  {
    title:"Weather API",
    description:`Please, sign up to use our fast and easy-to-work weather APIs. As a start to use OpenWeather products, we recommend our One Call API 3.0. For more functionality, please consider our products, which are included in professional collections.`,
    url:"https://openweathermap.org/api"
  },
  {
    title:"Bootstrap",
    description:"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
    url:'https://getbootstrap.com/'
  }
]
    return <>
    <div className="container">
      <h1 className="my-4">Sample Portfolio 
        <small>Made Simple with React</small>
      </h1>

    <div className="row">
    {
        data.map((e)=>{
          return  <Card 
          title={e.title} 
          url={e.url} 
          description={e.description}/>
        })  
    }
    </div>
</div>  
  </>
}

export default App