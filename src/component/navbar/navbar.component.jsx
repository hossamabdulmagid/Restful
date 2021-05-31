import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href='/'>Restful</Navbar.Brand>
            <Nav className="mr-auto container">
                <Nav.Link href="/posts">Posts</Nav.Link>
                <Nav.Link href="singlepost">SinglePost</Nav.Link>
                <Nav.Link href="deletepost">DeleteSinglepost</Nav.Link>
                <Nav.Link href="editpost">EditSinglepost</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;