function ShowSkills() {
    return(
        <section className="challenges"> 
        <div className="challenge">
            <div className="ccard">
                <div className="imgBox">
                    <img src="IoT.jpg" alt=""/>
                </div>
                <div className="ccontent">
                    <p>I am familiar with Internet of Things technology
                        and Embedded systems as whole, it’s applications
                        in real life and how it can be put to use</p>
                </div>
            </div>
            <div className="ccard">
                <div className="imgBox">
                    <img src="Python.png" alt=""/>
                </div>
                <div className="ccontent">
                    <p>Beginner python programmer, with experience in 
                        projects involving use of structures such as dictionaries</p>
                </div>
            </div>
            <div className="ccard">
                <div className="imgBox">
                    <img src="JS.jpeg" alt=""/>
                </div>
                <div className="ccontent">
                    <p>A Junior Javascript programmer with a growing
                        interest in exploring the subject even deeper.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowSkills));