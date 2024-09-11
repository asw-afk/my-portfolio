import { useState } from 'react';
import Nav from './nav/Nav';
import Card from './card/card';
import Portfolio  from './card/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === '/'){
            return <Card/>
        }
        if (currentPage === 'portfolio'){
            <Portfolio/> 
        }

        
    }


const handlePageChange = (page) => setCurrentPage(page);

return (
    <div> 

        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>

        <main className="mx-3">{renderPage()}</main>

    </div>
);
}