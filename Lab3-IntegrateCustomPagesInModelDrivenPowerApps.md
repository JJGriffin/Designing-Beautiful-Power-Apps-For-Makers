# Lab 3: Integrate Custom Pages in a Model-Driven Power App

In this lab, you will learn how to integrate the custom pages you created in Lab 2 into the **Coho Winery Purchase Order Management** app, by configuring the command bar to trigger the custom page and passing record information to the custom page.

## Lab Overview

### 🎯 Goal

TBC

### ✅ Prerequisites

TBC

## Scenario

TBC

### ⌛ Length

TBC

## ✨ Getting Started with Command Bar Configuration for a form

To trigger the pop up dialog or side pane with the custom page, you will have to configure a command bar button to execute the JavaScript with the custom page reference

1. **Open your project solution** and locate the model-driven app which you will need to edit 

   ![image](https://github.com/user-attachments/assets/7e9eb8cc-415a-489c-a143-c0656f6281fd)
 
3. **Locate your table** and the three dots on the right - **Select** `Edit Command bar`  
   ![image](https://github.com/user-attachments/assets/79b4863a-95e3-4482-9fa0-6f50d2f4150b)

4. **Choose** to edit the command bar for a form
5. **Select** `+New` → `Command` from the command bar on the left

![image](https://github.com/user-attachments/assets/258475b3-c790-4d40-81dc-a5f305be2496)

9. **Provide a name** for the button on the right side  
10. **Select** `Run JavaScript`  
11. **Select or search** for the web resource as the library  
12. **Set the function name** to `JavaScriptFunction`  
13. **Set parameters**  
14. **Save and publish** – then **Play** the app to test

## 💡 Fetch Record Details in the Custom Page

We now want to get the current record details from the open and selected item in the Model-Driven app, and display related information in the Custom Page 

1. **Open Custom Page** and select the .app properties - OnStart
   Configure the syntax to get the GUID of the current record from the JavaScript:

   <pre> Power fx
   Set(
    RecordItem,
    If(
        IsBlank(Param("recordId")),
        First(Sessions),
        "," in Text(Param("recordId")),
        LookUp(
            Sessions,
            Sessions= GUID(
                Last(
                    Split(
                        Param("recordId"),
                        ","
                    )
                ).Value
            )
        ),
        LookUp(
            Sessions,
            Sessions = GUID(Param("recordId"))
        )
    )
);
</pre>

## 🌟 Extra Challenges

TBC

**Congratulations, you've finished Lab 3** 🥳