function ShowWork() {
    return(
        <section>
        <div className="wrapper">
        <h1>What I offer</h1>
        <div className="content-box">
            <div className="card">
                <i className="bx bx-laptop bx-md"></i>
                <h2>Web development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iure qui at culpa amet quos reiciendis, nihil, porro, in alias aspernatur voluptatibus! Eius, voluptates. Suscipit repudiandae id corrupti dicta neque!</p>
            </div>
            <div className="card">
                <i className='bx bxs-bulb'></i>
                <h2>IoT</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iure qui at culpa amet quos reiciendis, nihil, porro, in alias aspernatur voluptatibus! Eius, voluptates. Suscipit repudiandae id corrupti dicta neque!</p>
            </div>
            <div className="card">
                <i className='bx bx-mobile'></i>
                <h2>Mobile development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iure qui at culpa amet quos reiciendis, nihil, porro, in alias aspernatur voluptatibus! Eius, voluptates. Suscipit repudiandae id corrupti dicta neque!</p>
            </div>
        </div>
    </div>
        </section>
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowWork));