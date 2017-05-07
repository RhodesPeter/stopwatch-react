# React Stopwatch
Checkout the stopwatch [here](https://stopwatch-in-react.herokuapp.com/).

![](https://github.com/RhodesPeter/stopwatch-react/blob/master/public/image-for-readme.png)

Built with React.js

### Key learnings:

Using `componentWillUnmount` to check weather a component is mounted (being displayed) or not. The componentWillUnmount function is invoked if the component is unmounted. You can use `componentDidMount` to run code in the case that the component is mounted. 

componentWillUnmount is used in component Stopwatch.js. <br> 
I needed this function as I was receiving the following error:

```
warning.js:36 Warning: setState(...): Can only update a mounted or mounting component. 
This usually means you called setState() on an unmounted component. This is a no-op. 
Please check the code for the Stopwatch component.
```

This error is produced when I visit a route (/info) which doesn't include the Stopwatch.js component but the component is still running in the background, trying up update the state.

I used the componentWillUnmount function to clear the setInterval in Stopwatch.js when the component isn't mounted.

```
componentWillUnmount = () => {
  window.clearInterval(this.interval);
}
```
