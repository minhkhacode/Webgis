import Dropdown from '../../components/Dropdown';
import HeaderComponent from '../../components/HeaderComponent';

function Content() {
    const Dropdowns = [
        {
            title: "hello",
            Selections: [{
                name: "abc",
            }]
        },
        {
            title: "hello1",
            Selections: [{
                name: "abc",
            }]
        },
        {
            title: "hello2",
            Selections: [{
                name: "abc",
            }]
        },

    ]

    return (
        <div className="content">
            <HeaderComponent />
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title"></h1>
                    <div className="card-nav">
                        <ul className="navbar">
                            <li className="nav-item">
                                Ban do GOOGLE
                            </li>
                            <li className="nav-item">VE TINH</li>
                            <li className="nav-item">OPENSTREETMAP</li>
                        </ul>
                    </div>
                    <div className="search">
                        <i></i>
                        <input type="text" name="" id="" placeholder="Hay go dieu gi do..." />
                    </div>
                </div>

                <div className="card-main">
                    <div className="map"></div>
                </div>

                <div className="card-control">
                    {Dropdowns.map((DropdownItem) => {
                        console.log(DropdownItem);
                        
                        return (
                            <Dropdown key={DropdownItem.title} DropdownTitle={DropdownItem.title} Selections={DropdownItem.Selections}/>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
}

export default Content;
