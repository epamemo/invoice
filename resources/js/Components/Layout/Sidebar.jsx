function Sidebar({ children }) {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay">
                    assafdgfssa
                </label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-slate-50">
                    <div className="btn btn-ghost ">
                        <a className="normal-case text-xl">A/P Invoice</a>
                    </div>

                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
