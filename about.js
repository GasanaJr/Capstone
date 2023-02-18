function ShowData() {
    return(
        <section>
        <div className="life">
        <div className="lcontent">
            <div className="icon"><ion-icon class="fa" name="school-outline"></ion-icon></div>
            <div className="contentt">
                <h3>SCHOOLS</h3>
                <p>I graduated from high school at lycee de Kigali where I did sciences
                    I am currently attending college at African Leadership University pursuing BSE</p>

            </div>

        </div>
        <div className="lcontent">
            <div className="icon"><ion-icon class="fa" name="location-outline"></ion-icon></div>
            <div className="contentt">
                <h3>Location</h3>
                <p>Born and raised in Rwanda the land of a thousand hills. Currently based in Kigali city </p>

            </div>

        </div>
        <div className="lcontent">
            <div className="icon"><ion-icon class="fa" name="people-outline"></ion-icon></div>
            <div className="contentt">
                <h3>Passion</h3>
                <p>I have a deep interest in how IT can be used to make life easier as well as making money at the same time. I blend in well with people and I love know
                    ldge sharing activities
                </p>

            </div>

        </div>
    </div>
    </section>

    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowData));