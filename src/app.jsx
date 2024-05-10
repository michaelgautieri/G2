import {useState} from 'react';
import Cover from "./page.jsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState('page');

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.history.pushState(null, null, `/${page}`);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'page':
                return <Cover />;
        }
    };
    return (
        <body>
            {renderPage()}
        </body>
    );
};

export default App;