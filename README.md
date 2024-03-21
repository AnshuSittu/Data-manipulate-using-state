# Data-manipulate-using-state
Namste React Episode 11

** Higher Order Component **
>Higher Order Component is a function which takes a component and returns a component
 
Why DO we use Higher order component and where do we use it
>Higher order component basically takes an component as input & enhances that component i.e 
 add some extra feature to that component and returns it back 
>it act like a enhancer kind of function which take a existing component and it just modify that component
 and returns it back know as Higher order component

 
// Higher Order Component (HOC)

// input - RestaurantCard =>> RestaurantCardPromoted

const withPromtedLabel = (RestaurantCard) => {
  return () => {
     return (
      <div>
        <label>Promoated </label>
        <RestaurantCard/>
      </div>
     )
  }
} 

> withPromtedLabel this is a HOC which take RestaurantCard as a input and return back
  a function, functional component basically and this component is enhances version of 
  RestaurantCard with adding a promoted label to it.

>UI is very static
>all the react have two imp layer UI layer and data layer and this UI layer is powered by data layer
>This data layered consist of state props  local variables  
>UI Layer where JSX is there

In JS insted of @type this you can write ["@type"] as well if there is special char in API

RestaurantCategory

> React Dev tool install in chrome
>it is very useful for debugging

<b>How to collapse all the accordion once open one accordion</b>
> All the accordion item have there own state, own show item
> all the Restaurant Category is mantaing there own state 
> on click it can show there own itemList and hode as well but
  if we click on one accordion and then on another accordion then
  all other need to be collapse it self
> i.e Restaurant menu to control its Category so we can control over show and hide of 
  all other accordion
> So We dont want to have Restaurant Category have there own state 
> but it take show item from 'props'

<b> controlled and uncontrolled Component</b>

>So this is controlled component
> This RestaurantCategory is now a controlled component as we are controlling the parent
  i.e RestaurantMenu component is Controlling the component 

uncontrolled Component
>when it has its own state (RestaurantCategory) it was uncontrolled component
 as RestaurantMenu doesn't have its control because if it want to show/hide it 
 is doing by itself that's why its an uncontrolled  component
>The parent doesn't have control over its children  

> Now the parent have control to hide all the item 
   showItem={false}  // RestaurantMenu
   
>if we pass true to showItem then it will collapse all the Category
>so If I want to show my first accordion only then
 
  {categories.map((catergory, index)
  showItem={index === 0 && true}
  
>this index is coming from map function so the first parameter each item from this map i.e categories
 second is index this how we get the index 
 
> so when the index === 0 then show the first accordion
>if we want to show the second accordion and other to hide then we have to give
 
 index === 1 its true other will be false 
 showItem={index === 1 ? true: false} 
 
>Now we are controlling this that's why it is control component

>At a time only one accordion should show for this we have to manage the state
>to control that we can take index to state
>Now we have to build the state variable named as shwoIndex 
>So it will help to get the desire output which is once 1 accordion is open all other will collapse
 vice versa 
>So will by creating const [showIndex, setshowIndex] = useState(0) by default 1 st one will open
>According to showIndex I want to control my showItem

*Earlier all the component are controlling themselves so we have taken that power and give it to the parent
 Now parent is controlling that now at a time only one accordion can be expanded 
 and that accordion can be expanded with the help of this shwoIndex, whatever the showIndex is that accordion
 will be expanded otherwise all the accordion will be false*

> if I change my showIndex it will automatically update it i.e expand and collapse it
  and the parent can control it 
  
** How to alter showIndex on click **  
> now somehow I want to change the showIndex on click so to get the desire output 
How can a child modify / can I modify my parent state variable from child 
>RestaurantCategory 

>SO achive this need to pass setshowIndex to the children

how to pass this to children
>it will pass through a function and it will be called index
 this function is basically set the showIndex of that particular index
 
   setShowIndex={() => setShowIndex(index)}
 
>we can pass this feature of setshowIndex to the children (RestaurantCategory)
 and extract it in RestaurantCategory 
 

 >As soon as we clicked on it i.e new accordion as soon as we click on new accordion
  it will just set showIndex from its parent (change the index of it ) and all the others will be collapse
  
   const RestaurantCategory = ({ data, showItem, setShowIndex }) => {}
  
> and we have to just called it (in RestaurantCategory where click handler is handle ) 
   
   const handleClick = () => {
   setShowIndex();
  };

> whatever we clicked on this accordion it basically called setShowIndex and this setShowIndex is basically a different
  setShowIndex={() => => setShowIndex(index) all the time 
  
Recap:
> Earlier all the component controlling itself now the RestaurantMenu has a state variable is 0 
  i.e expand is accordion is 0 and if you see all the accordion they will set there own setShowIndex 
  if you will click on the other accordion earlier it will be 0  once it will click it will change to 1
  and because the setShowIndex is 1 it will expand the accordion with index 1 

>if we dont want to expand anything the we have to give null to the useState 
   
   const [showIndex, setShowIndex] = useState(null)
   
>if you click on any accordion then it will expand other wise it will all collapse
   
<b> This is know as lifting State UP  
 READ MORE ON IT </b>
 https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
 
 
Props Drilling
>if there is some dummy data in RestaurantMenu and we have to pass this into the 
 itemList i.e we have created some dummy data on top label and pass it to the leaf 
 of the tree (there child to there children) 
> to access that dummy data so we can't access that data directly pass in we have to pass in data via its intermediate parent

>So if I have to pass this dummy data to itemList then we have to first pass this data to RestaurantMenu
>then my RestaurantCategory will receive this this dummy data and pass to itemList children
>Now I can access this dummy data to itemList and do whatever I want to 
>Now this dummy data is printed on itemList List 
>although RestaurantCategory RestaurantMenu just passing this 
>SO this is props drilling 
>it is not feasible for big project it is not very good way
>we should Avoid prop drilling

Read More on React Document 

>SO to avoid this react gives us React Context  

React context 
> we use Context a global place where data is placed and anybody can access it  
  that is know as React Context

What is context and how it works?
> suppose any a data which is required everywhere 
> so Logged in user name can be required anywhere like Ex in cart or to display name of logged user 
> theme is also an example
> SO there is some data which we need anywhere in our App can be access from anywhere in our app
> for that data we hold at Context and that context can be used anywhere in our app 
> Context solve the props drilling if we had a central store where we keep the data we dont need to 
  drill down the props now can access anywhere we want to 
  
** Creating Of context **
> context is a global thing so not inside component folder but in different place 
> so create it inside utiles 
> userContext.js which keeps the information of user logged In
> assume its a global kind of Object in react app

How DO we create Context
>SO react gives a special utilty function know as createContext
  
  import React, { createContext } from "react";

const userContext = createContext({
    logedInUser : "Default User"
});

export default userContext;

>we will use this to createContext
>This createContext comes from react Lib
> And when we will createContext we will give some piece of information that it will hold 
> kind of central global object 

** How to Access it **
> so if we have to access it in our header component 
> after the login Button we need name of the logged in user 
>for that we need another <li>userName</li> where we want the name of user
> So we can access this by using React Hook to access our context
> SO for this we have useContext to access context

>to create context we have createContext and to use we have useContext
> we can use useContext and get the data from context using useContext
> and pass userContext inside the useContext

   const data = useContext(userContext);
   
>This userContext comes from our User Context file
>this useContext comes from React 
>you can create multiple context but dont use word Global context
>so whatever context you wanted to use pass in this useContext()
>and get that data which is userContext'
>we can extract my login user from this data 
>we can get this logged In user like below 

  const {logedInUser} = useContext(userContext);
   console.log(logedInUser);
   
>and then display this data to Li 
  
<li className="px-1 mx-1 font-bold">{logedInUser}</li>

>this is basically React Context  and we can get the data anywhere want 

<b>only the data which you are using in the multiple places can be kept inside the context
 that is where you use your context </b>
 
>we can use in all other pages as well 
>we can not use useContext in class based component 
>then how to access in class based component

>you need to import userContext first userContext
>need to create a <div></div> and inside that you need to ..

       <div>
      Loggedin user:
        <userContext.Consumer>
       (data) => console.log(data)
        </userContext.Consumer>
      </div>
>what is this Consumer
>when we create a context react gives a power of .consumer as well
> SO we can use useContext in two ways 
  
  i.const {logedInUser} = useContext(userContext);
       In functional based component
  
  ii.   <userContext.Consumer> </userContext.Consumer>
        in class based component

>and inside this we will have JSX which has a call back function
 and this call back function has access to that data (userContext)
 
>we used it like a component <userContext.Consumer> this is not a hook it is a component
 in that component we have a call back function which gets data inside it 
 
** How To Change/Modify the default value of context **
>suppose if we have some authentication code has been written at root label to fetch some login username & password 
  to check id pass is correct or not 
> We have kept this data at local state of our application 
> like we have an API which gives us userInfo and kept this data at top label useState



How to pass new information to Our App we will use Context Provider

>Context Provider 
><Context.Provider/> is provided by react
>we will wrap whole app in <userContext.provder>
    <userContext.Provider>
   <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>

>and then we can pass the whatever value we have to pass in 
 
     <userContext.Provider value={{loggedInUser: userName}}> 
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
  );

>we are providing new value to it and passing/providing to whole app 
>whatever you wrap inside that is wraped whole app inside this <userContext.provide>
  that means anywhere in my app we have this userContext.Provider 
  the value will be this (value={{loggedInUser: userName}})
  now our component will be not using that default value 

>Now the Logged in value will be this new value which is Avir SIngh

>it depands on where you have provided your userContext
>if you have not provided anywhere it will take default value 
> if you will wrap your Application inside the <userContext.Provider> 
  it will take the spacfic value from there 
  
** How to update context **
>  SO we have to update user name from the Input Box which I have created in the Body from here App component through userContext.Provider
> to update from that Input Box
> How to Update using setuserName using that InputBox i. Body Component
> So we can pass this <userContext.Provider value={{ loggedInUser: userName,setUserName}}> }}> 
>So we have pass this setuserName function over here as well 
>just like we have access this loggedInUser from here Header using useContext
>likewise we can also extract our setUserName using the same way like loggedInUser
>So In our Body component suppose if we want to setUserName we can access it extectly the same way
>we have to import useContext from react and then userContext
>In the context we have also put the function to modify itself 

**How to Get that setUserName**
> so we can get via setUserName using useContext and what context i,e userContext
   
   const {SetUserName} = useContext(userContext)

>Now we have to change our username onChange of my input 
  
> onChange we have to setUserName for that we have call back function and it will set our setUserName
  with the value i.e (e).target.value 
  
  onChange={(e) => setUserName(e.target.value)}
  
>And the value  of this input box is loggedInUser and we will get loggedInUser name from
 local state which we have declared while using useContext
 
>Now our Input box has value logedInUser and when we change it will set that value once again 
  