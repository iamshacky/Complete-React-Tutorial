/*
Note 1: Button can't handle a click event function like normal JS does because the function would fire upon the page rendering.
The solution is to wrap the click event function inside of an annonymous function. See clip of video by Net Ninja at
https://youtu.be/0XSDAup85SA?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=223
*/

const Home = () => {

  const handleClick = (e) => {
    console.log('hello ninjas', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> // Note 1 at top of page
    </div>
  );
}
 
export default Home;
