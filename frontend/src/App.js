import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import ProductScreen from './screens/ProductScreen';
import { Navbar } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { NavDropdown } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import HomeProdScreen from './screens/HomeProdScreen';
import ElectricalScreen from './screens/ElectricalScreen';
import FornitureScreen from './screens/FornitureScreen';
import GardenScreen from './screens/GardenScreen';
import CarsScreen from './screens/CarsScreen';
import AnimelsScreen from './screens/AnimelsScreen'
import LoginScreen from './screens/LoginScreen';
import UploadScreen from './screens/UploadScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { user } = state;

  const logoutHandler = () => {
    ctxDispatch({ type: 'LOGOUT' });
  };

  return (

       <BrowserRouter>
      <div className='a-flex flex-column site-container'>
        
        <header>
          <Navbar>
            <div class="row" style={{ backgroundImage: "url('/images/logo.png')", width:"1500px ",height: "350px" }}>
              <div class="col-md-auto" >
                  <Container > 
                  <Nav className='me-auto'>
                      <Link to='/upload' className='nav-link'style={{position: "absolute", top: "150px" , left: "400px", fontWeight: 'bold', fontSize: '1.2rem', fontfamily:'Ariel'}}>
                        Upload Product
                      </Link>
 
                  </Nav>
    
                  </Container>

                  <Nav className='ml-auto' style={{position: "absolute", top: "150px" , right: "150px", fontfamily:'Ariel',  fontWeight: 'bold', fontSize: '1.2rem'}}>
                    {user && (
                      <NavDropdown title={user.name} id='username'>
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) }
                    
                    {!user && (
                      <LinkContainer to='/login' style={{fontfamily:'Ariel',  fontWeight: 'bold', fontSize: '1.2rem'}}>
                        <Nav.Link>
                          <i className='fas fa-user' ></i> Sign In
                        </Nav.Link>
                      </LinkContainer>
                    )}
                  </Nav>
              </div>
            </div>
            
          </Navbar>          
        </header>
        <main>
          <div class="row" >
            <div class="col col-lg-3" style={{padding: '50px 0px 0px 50px'}} >

              <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white" >
                <div class="position-sticky" >
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a  href='/'  class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main page</span>  </a>

                  <a href="/FornitureScreen" class="list-group-item list-group-item-action py-2 ripple"> 
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Forniture</span>   </a>

                  <a href="/ElectricalScreen" class="list-group-item list-group-item-action py-2 ripple" >
                    <i class="fas fa-chart-line fa-fw me-3"></i><span  styly={{display:'inline'}}>Electrical products</span></a>

                  <a href="/HomeProdScreen" class="list-group-item list-group-item-action py-2 ripple"
                    ><i class="fas fa-chart-line fa-fw me-3"></i><span>Home producats</span></a>

                  <a href='/GardenScreen' class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Garden products</span> </a>

                  <a href='/CarsScreen' class="list-group-item list-group-item-action py-2 ripple" >
                    <i class="fas fa-chart-bar fa-fw me-3"></i><span>Car products</span></a>

                  <a href='/AnimelsScreen' class="list-group-item list-group-item-action py-2 ripple"
                    ><i class="fas fa-globe fa-fw me-3"></i><span>Animel products</span></a>
                  </div>
                </div>
              </nav>
              
            </div>
            <div class="col-lg-8">
              <Container className='mt-3' style={{padding: '0px 0px 0px 20px'}}>
                <Routes>
                  <Route path='/product/:id' element={<ProductScreen />} />
                  <Route path='/HomeProdScreen' element={<HomeProdScreen />} />
                  <Route path='/upload' element={<UploadScreen />} />
                  <Route path='/login' element={<LoginScreen />} />
                  <Route path='/FornitureScreen' element={<FornitureScreen />} />
                  <Route path='/ElectricalScreen' element={<ElectricalScreen />} />
                  <Route path='/GardenScreen' element={<GardenScreen />} />
                  <Route path='/CarsScreen' element={<CarsScreen />} />
                  <Route path='/AnimelsScreen' element={<AnimelsScreen />} />
                  <Route path='/' element={<MainScreen />} />
                </Routes>
              </Container>
            </div>
          </div>
        </main>
        <footeer>
          <div className='text-center'>All rights reserved</div>
        </footeer>
       </div>
    </BrowserRouter>

       
      
  


   
  );
}

export default App;
