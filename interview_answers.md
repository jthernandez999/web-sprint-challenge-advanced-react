# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A functional component does not have state. A stateful component, a class component, does. A functional component can have state through props or via useState hook. The key differences are the stateful component is a class, its render method, the constructor, this.state, and this.props. Class component handle the component lifecycle in a special way. 

2. When does a componentWillMount function be called?  What about a componentWillUpdate? 
componentWillMount is deprecated and renamed UNSAFE_componentWillMount() is inovoked just before mounting occurs. It is called before render().
componentWillUpdated is also deprecated and renamed UNSAFE_componentWillUpdate, is invoked just before rendering when new props or state are being received. 

3. Define stateful logic.
Stateful logic is logic that is built into a component that alters state. Examples are event handlers or a toggle function. 


4. What are the three step of creating a successful test? What is done in each phase?
Arrange, Act, and Assert
In the Arrange phase, we set up the component we are going to test. We render the component into a virtual DOM. 
In the Act phase, we test that our elements are in fact being rendered by the component.  
In the Assert phase we assert that our elements have indeed rendered.  

