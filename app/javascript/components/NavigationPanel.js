import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/users/usersReducer";

const NavigationPanel = (props) => {
  const { auth } = props
  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('auth')
    dispatch(logOut())
  }
  return(
    <nav className="navbar">
        <h1 className="logo">AWR</h1>
      <div className="navigate">
        <NavLink to='/' style={({ isActive }) =>
    isActive
      ? {color: 'green', textDecoration: 'none',background: '#f0f0f0'}
      : { textDecoration: 'none',color: '#545e6f', background: '#f0f0f0' }
  }>Restaurants</NavLink>
        {!auth && <NavLink to='/login' style={({ isActive }) =>
    isActive
      ? {
          color: 'green',
          textDecoration: 'none',background: '#f0f0f0'
         
          
        }
      : { color: '#545e6f', background: '#f0f0f0',textDecoration:'none' }
  }>Log In</NavLink>}
        {!auth && <NavLink className="btn"  to='/signup' 
        style={({ isActive }) =>
    isActive
      ? {
          color:'green',
          textDecoration: 'none',background: '#f0f0f0'
          
        }
      : { color: '#545e6f', background: '#f0f0f0', textDecoration:'none' }
  }>Sign Up</NavLink>}
        {auth && <button className="nagivate-btn"  type='button' onClick={e=> handleLogout(e)}>Log Out</button>}
        {auth && <NavLink to='/reservations' style={({ isActive }) =>
    isActive
      ? {
          color:'green', 
          textDecoration: 'none',background: '#f0f0f0'
        }
      : { color: '#545e6f', background: '#f0f0f0', textDecoration:'none' }
  } >Reservations</NavLink>}
      </div>
      <div className="social">
        <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/></svg>
          </div>
          <p>© Codemages Inc. 2022</p>
        </div>
    </nav>
    
  )
}

export default NavigationPanel
