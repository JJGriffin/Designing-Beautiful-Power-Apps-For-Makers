# Lab 2 - Create Beautiful Custom Pages

In this lab, you will learn how to **build Custom Pages** with a focus on **responsive design**, **Styling** and accessing **Model-Driven App record details**

## Lab Overview 

### 🎯 Goal

- Build a Custom Page to use as a full page, side pane, and dialog inside a Model-Driven App.

- Connect to your data sources and fetch record details with the Param() function in the Custom Page.

- Master responsive layouts so your page looks good everywhere.

- Add modern styling elements like shadows, rounded corners, blur effects, and SVGs to make apps pop

- Optimised Power Fx syntax for reusability, performance and maintainable applications

### ✅ Prerequisites

- Completion of [Lab 1 - Create a Model-Driven Power App](Lab1-CreateModelDrivenPowerApp.md)

### Scenario

Coho Winery are rolling out a new Purchase Order app to replace their manual Word-and-screenshot process. To improve the user experience, you have been asked to design two key pages:

Landing Page – a modern entry point where users can quickly navigate to key links, view PO data from the ERP system, and access important actions.

PO Document Side Pane – a page that displays stored PDF versions of PO requests, giving finance and auditors instant access without leaving the app.

Together, these pages will provide both an attractive front door to the application and a practical way to view and manage PO request documents.

### Length

~60–75 minutes

## ✍️ Exercise 1: Create a Landing Page and Configure settings

Create your first custom page as a landing zone for the users

1. The maker studio - Select the **Coho Winery** solution you created in Lab 0.
2. Click **+ New** -> **App** -> **Page**
2. Name it **Coho Winery Landing Page**
3. Configure page: 
    - *Scale to Fit* should be **Off** (Ensures responsive layouts)
    - *Automatic save every 2 minutes* is recommended to be **On**

💡 This page sets the tone for the app and gives users a clear “home base” to work from as the first thing they will see when opening the MDA

## ✍️ Exercise 2: Build a Responsive Layout

**The goal**: Ensure that the page works and the content looks great on all screens by understanding containers.

1. Insert a vertical container as the main frame for the layout
2. Name it cntMainVertical
3. Center it on the screen by setting the X & Y formulas on the container

<pre> Power Fx 
X: (Parent.Width - Self.Width) / 2
Y: (Parent.Height - Self.Height) / 2
</pre>

3. Inside, nest horizontal containers for grouping content (e.g., navigation buttons, ERP data cards).
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
Logo for Coho Winery:

![Coho Winery Logo](image.png)
<pre> HTML
$" <div style='
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

## Exercise 5: Working with YAML
1. Copy the container you have built
2. Add it to another screen


## Exercise 6: Wokring with SVGs
1. Add an image control 
2. Build the SVG code (for icons Bootstrap is a great source for generating SVG code)
3. Alter the code to your needs with dynamic values using set variables

<pre> SVG code
"data:image/svg+xml," & EncodeUrl("<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='" & varHexValue & "' class='bi bi-plus-lg' viewBox='0 0 16 16'>
  <path fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/>
</svg>")

</pre>

## 🌟 Extra Challenges

- Add dark mode 
- Add CSS styling 
- Add SVGs for design 
- Adjust styling of the container and alignment of items

**Congratulations, you've finished Lab 2** 🥳