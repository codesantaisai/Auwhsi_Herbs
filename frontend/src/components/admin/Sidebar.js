import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                </li>
        
                <li id="prolink">
                    <NavDropdown title={
                        <i class="fa fa-shopping-bag pro" aria-hidden="true" > Product</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} > <i className='fa fa-shopping-basket'> All</i></NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products/create')} > <i className='fa fa-plus'> Create </i></NavDropdown.Item>
                    </NavDropdown>
                </li>

                <li>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                </li>
                        
                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>

                <li>
                    <Link to="/admin/reviews"><i className="fa fa-comments"></i> Reviews</Link>
                </li>

                <li>
                    <Link to="/admin/reports"><i className="fa fa-users"></i> Reports</Link>
                </li>

                <li>
                    <Link to="/admin/blogs"><i className="fa fa-blog"></i> Create Blog</Link>
                </li>
        
            </ul>
            </nav>
        </div>
    )
}