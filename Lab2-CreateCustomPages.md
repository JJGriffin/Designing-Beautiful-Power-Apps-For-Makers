# Lab 2 - Create Custom Pages

In this lab, you will learn how to build Custom Pages with focus on responsive design, setup in Power Apps and development based on best practice principles.


## Lab Overview 

**Goal:** 
- Build Custom Pages to be used as a full page, side pane and dialog in a solution
- Connect to relevant datasources
- Fetch record details using the Param() function and connecting to the record context
- Develop responsive apps

**Prerequisites** 
- Existing solution in a Power Platform environment
- System Customizer or System Administrator security role
- Access to datasources

## Scenario

TBC

## Instructions

In this lab, you will do the following:

**Build responsive Custom Pages with modern design elements**

**Create a Landing Page**
1. Within the solution, click **+ New** -> **App** -> **Page**
2. Name it **Main Landing Page**
3. Check settings. 
    - *Scale to Fit* should be **Off**
    - *Automatic save every 2 minutes* is recommended to be **On**

**Build a Responsive Layout**
1. Add a vertical container - adjust X property to (Parent.Height - Self.Height)/2
