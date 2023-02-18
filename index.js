function ShowIndex() {
return (
    <section>
    <div className="contentOne">
    <h1>Hey there!</h1>
    <h1> <span>I am</span> Didas Junior</h1>
    <p>I'm  a software developer with deep interest in interactive web development and mobile applications.
        I am a quick learner and gives all my best. </p>
    <a href="contact.html">Hire me</a>
</div>

<div className="profile">
    <img src="junior.png" alt=""/>
</div>
</section>
)

}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowIndex));