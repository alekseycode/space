import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <h1 className='col-md-6'>
                    <Link to="/">Space Mission</Link>
                </h1>
            </header>
                
        </>
    );
}

export default Header;