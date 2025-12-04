
# Lab 7.1, Component Creation and Props

## Description
In this lab React components are templated and instanced to exercise the use of custom types and the handling of their properties between files.

## Running the program
To view use this lab, open index.html using Live Server.
<br>

## Reflection Questions
> How did you handle optional props in your components?

Optional properties were handled inside the component function using the ternary operatory, returning a value of the expected type if the optional property is not included.
<br>

> What considerations did you make when designing the component interfaces?

In this lab, each interface imported into a component required a property that was another interface. When creating an instance of an imported interface, the required property also has to include its own required properties...
<br>

> How did you ensure type safety across your components?

Components expect the types imported from index.ts, and consistently follow the same property requirements as designed in index.ts
<br>

> What challenges did you face when implementing component composition?

Accessing the properties of a property. Instances of components are given detailed property definitions to ensure all requirements are met. Properties could have been made optional as well, however 
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



