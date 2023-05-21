import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Auth/AuthContext";
import { toast } from "react-toastify";
const NavbarCom = () => {
  const { user, logOut } = useContext(AuthProvider);
  const signOutBtn = () => {
    logOut().then(() => {
      toast("SignOut  SuccessFull ");
    });
  };
  return (
    <div className="">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src={logo} className="mr-3 h-6 sm:h-24" alt="toytopia Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
        {user ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <>
                  <Tooltip
                    content={user.displayName ? user.displayName : " Miyad"}
                  >
                    <Avatar
                      alt="User settings"
                      img={user.photoURL}
                      rounded={true}
                    />
                  </Tooltip>
                </>
              }
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  {user.email ? user.email : "1234@gmail.com"}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={signOutBtn}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to={"/login"}>
              {" "}
              <Button> Log In</Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to={"/"}>Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink  to={'/allToy'}>All Toy</NavLink>
          </Navbar.Link>
          {
            user ? <Navbar.Link>
            <NavLink to={'myToy'}>My Toys</NavLink>
          </Navbar.Link>:null
          }
         {
          user ?  <Navbar.Link>
          <NavLink to={'/addToy'}> Add A Toy </NavLink>
        </Navbar.Link>: null 
         }
          <Navbar.Link>
            <NavLink to={'/blog'}> Blogs</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
