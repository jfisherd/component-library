
# Lab 7.1, Component Creation and Props

## Description
In this lab React components are made and implemented to exercise the use of



## Running the program
To view use this lab, open index.html using Live Server.
<br>

## Reflection Questions
> How did you handle optional props in your components?

Optional properties were handled using the ternary operatory
<br>

> What considerations did you make when designing the component interfaces?

In this lab, each interface imported into a component required a property that was another interface. When creating an instance of an imported interface, the required property also has to include its own required properties.
<br>

> How did you ensure type safety across your components?

Components expect the types imported from index.ts, and consistently follow the same property requirements as designed in index.ts
<br>

> What challenges did you face when implementing component composition?

Accessing the properties of a property. 
<br>

Applying styling to created components. Edits were made to App.css and index.css, no change observed. 
<br>
// App.css and index.css
<br>
`AlertBox {
  border: 10px solid red;
  background-color: green;
}`
<br>



