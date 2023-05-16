import "./Styleguide.scss"
function Styleguide() {
    return (
     <>
     <h1>Colores</h1>
     <div class="container">
          <div class="box-style color-red"></div>
          <div class="box-style color-blue"></div>
          <div class="box-style color-pink"></div>
          <div class="box-style color-black"></div>
          <div class="box-style color-violet"></div>
          <div class="box-style color-orange"></div>
          <div class="box-style color-yellow"></div>
          <div class="box-style color-green"></div>
          <div class="box-style color-white"></div>
     </div>
     
     <div class="flexbox">
          <div>
               <h1>Tipografía Merriweather</h1>
               <h1 className="Merriweather">Heading H1</h1>
               <p className="paragraph">60px</p>
               <h2 className="Merriweather">Heading H2</h2>
               <p className="paragraph">46px</p>
               <h3 className="Merriweather">Heading H3</h3>
               <p className="paragraph">34px</p>
               <h4 className="Merriweather">Heading H4</h4>
               <p className="paragraph">30px</p>
               <h5 className="Merriweather">Heading H5</h5>
               <p className="paragraph">24px</p>
               <h6 className="Merriweather">Heading H6</h6>
               <p className="paragraph">16px</p>
          </div>
          
          <div>
               <h1>Tipografía IBM</h1>
               <h1 className="IBM">Heading H1</h1>
               <p className="paragraph">60px</p>
               <h2 className="IBM">Heading H2</h2>
               <p className="paragraph">46px</p>
               <h3 className="IBM">Heading H3</h3>
               <p className="paragraph">34px</p>
               <h4 className="IBM">Heading H4</h4>
               <p className="paragraph">30px</p>
               <h5 className="IBM">Heading H5</h5>
               <p className="paragraph">24px</p>
               <h6 className="IBM">Heading H6</h6>
               <p className="paragraph">16px</p>
          </div>
     </div>

     </>
    )
  }
  
  export default Styleguide