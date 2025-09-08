# Lab 2 - Create Custom Pages

In this lab, you will learn how to **build Custom Pages** with a focus on **responsive design**, and accessing **Model-Driven App record details**

## Lab Overview 

### 🎯 Goal

- Build Custom Pages to be used as a full page, side pane and dialog in a Model-Driven App
- Connect to relevant datasources
- Fetch record details using the Param() function and connecting to the record context
- Develop responsive apps

### ✅ Prerequisites

- Completion of [Lab 1 - Create a Model-Driven Power App](Lab1-CreateModelDrivenPowerApp.md)

### Scenario

TBC

### Length

TBC

## ✍️ Exercise 1: Create a Landing Page

1. Within your solution, click **+ New** -> **App** -> **Page**
2. Name it **Main Landing Page**
3. Check settings. 
    - *Scale to Fit* should be **Off**
    - *Automatic save every 2 minutes* is recommended to be **On**

## ✍️ Exercise 2: Build a Responsive Layout

Nest containers to group related content (build one horizontal container in a Vertical)

1. Add a vertical container for structured alignment
2. Adjust X property to (Parent.Height - Self.Height)/2
3. Adjust Y property to (Parent.Width - Self.Width)/2

<pre> Power Fx 
X: (Parent.Width - Self.Width) / 2
Y: (Parent.Height - Self.Height) / 2
</pre>

*💡 This will center and align the main container*

4. Nest horizontal containers within the main container



## ✍️ Exercise 3: Fetch Record Information
1. Add datasource (Dataverse, SharePoint etc.)
2. Select **App** in the left corner and click **Formulas**
3. Create a formula for referencing the record GUID and use the function GUID() to ensure correct type

<pre> Power Fx 
nfRecordItem =
    If(
        "," in Text(Param("recordId")),
        LookUp(Table, 'Unique GUID field' = GUID(Last(Split(Param("recordId"), ",")).Value)),
        LookUp(Table, 'Unique GUID field'  = GUID(Param("recordId")))
    ); </pre>

The record can also be wrapped in {} so that needs to be removed in some cases:

<pre> Power Fx 
GUID(Substitute(Substitute(Param("recordId"), "{", ""), "}", ""))</pre>

> **Note:** 
*Named Formulas needs to be closed using ;*

*Param() function gets the record GUID parsed from the JavaScript, and GUID() formats the output as GUID, not a string. We are also checking if there are several records selected by splitting the string after ","*

## ✍️ Exercise 4: Styling 
1. Add rounded corners for modern look (between 5-10 border radius)
2. Set a slight box shadow 

Add HTML blur to your page:
1. insert HTMLtext control
2. Edit text value to be:

<pre> HTML
$"<div style='
background: rgba(255, 255, 255, 0.2); /* Solid background */
border-radius: 16px;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
width: {Self.Width-2}px;
height: {Self.Height-2}px;
padding: 10px; /* Adds space inside the box */
overflow: hidden; /* Prevents scrollbars */
box-sizing: border-box; /* Ensures padding is included in width/height */
position: absolute; /* Allows absolute positioning */
top: 0; /* Aligns to the top */
left: 0; /* Aligns to the left */
color: white; /* Default text color for fallback */
font-family: Poppins, sans-serif; /* Sets the font to Poppins */
'>

</pre>

## 🌟 Extra Challenges

- Add dark mode 
- Add CSS styling 
- Add SVGs for design 
- Adjust styling of the container and alignment of items

**Congratulations, you've finished Lab 2** 🥳