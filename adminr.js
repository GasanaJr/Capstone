function ShowAdmin() {
    return(
<section>
    <section className="userr">
        <h2>Welcome Admin</h2>
        <p id="admin">Admin privileges</p>
        <table>
            <thead>
            <tr>
              <th>Privilege</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Edit</td>  
              <td>Make Edits to the contents on the existing articles on the blog.</td>
            </tr>  
            <tr>
                <td>Delete</td>
                <td>Delete existing articles on the blog.</td>
              </tr>
              <tr>
                <td>Publish</td>
                <td>This is for publishing the edits you made on the articles or newly created articles</td>
              </tr>
              <tr>
                <td>Add Post</td>
                <td>This is for creating or adding a new article on the blog</td>
              </tr>
            </tbody>
          </table>

     </section>
    {/*<h2>Blog Statistics</h2>
    <section className="stats">
    	<div className="stati">
            <div id="curve_chart" style="width: 900px; height: 500px" className="size"></div>
    <p className="exp">This is a graph of the first four months illustrating the articles and the subscriptions made in those four months.</p>
        </div>
        <div className="stati">
            <p className="exp">
                This pie chart shows the number of reads per genre of articles on the blog. This is to visualize the most read genres to emphasize on them.
            </p>
            <div id="donutchart" style="width: 1200px; height: 500px;" className="size"></div>
        </div>
    </section> */}
</section>
    )
    
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowAdmin));