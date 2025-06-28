# Lab 1 - Create Model-Driven Power Apps

In this lab, you will create the Model-Driven App used to display and edit purchase order (PO) information. 

## Scenario

Now that you have prepared your Power Platform development environment, you have been given your first work package. Coho Winery are wanting to improve their internal processes for handling PO's. Currently, all PO's are raised within the company's ERP system. Users need to manually fill out and send a Word document to the finance team every time a new PO is required. Once a PO is raised within the ERP system, the information then needs to be sent via a screenshot to the relevant individuals in the organisation and, on some occasions, directly to the end customer. Only users who have been configured in the ERP system can raise a PO and also view the remaining monetary value. In addition, there are often long delays in the process, due to the manual effort required and the availability of colleagues in the finance team, particularly during busy periods of the month. To assist with year end audits, physical document records of all PO requests must be retained and stored within the organisations document library. Auditors require the ability to search for documents based on their underlying contents.

The aim of the work package is to build an application within the Power Platform that addresses the following key requirements:

- Provide a landing screen for users to easily navigate to internal and external links, and display current data from the ERP system.
- Capture and store all PO request details.
- Allow the finance team to approve or reject PO requests.
- Retrieve and display on-demand the remaining value on a PO, from the ERP system API.
- Automatically generate and store physical PO request documents within the organisations document library. This will be derived from the template you uploaded as part of **Lab 0**.
- Give auditors streamlined access to quickly view and access PO request documents, without having to navigate to different locations.

The diagram below illustrates the process the end solution should follow:

![](Images/Lab1-CreateModelDrivenPowerApp/S_CohoWineryProcess.png)

After analysing the requirements in detail, you identify the following platform features that you would like to use to implement the solution:

- [Microsoft Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro), to store the data, leveraging a mixture of custom and [Common Data Model (CDM)](https://learn.microsoft.com/en-us/common-data-model/) tables.
- A [model-driven Power App](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview) to present the data stored in Dataverse
- To handle the landing page and document display requirements, [custom pages](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview).
- [Power Automate cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud), to handle the approval process using the [modern flow approvals engine](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) and any other automation requirements.
- A [custom prompt in AI Builder](https://learn.microsoft.com/en-us/ai-builder/prompts-overview) to assist with document contents search.

You begin your work by planning out the data model you will use and all necessary Dataverse customisations to support the solution. You identify that new table, called **Purchase Order**, will be required, alongside the existing **Account** and **Contact** tables. You will complete all necessary steps to build the model-driven Power App, including all required form and view customisations, before then creating some test records. Finally, you will initiate and test the integration with the ERP by connecting to it's API and create the automation to generate the physical request documents.

## Instructions

In this lab, you will do the following:

- Create a new table called **Purchase Order** and customise it accordingly.
- Add in the **Account** and **Contact** tables to your solution and customise accordingly.
- Create and define the configuration for your model-driven app, before testing it further.
- Add some test records into the system.
- Configure the integration with the backend ERP API.
- Create a cloud flow to generate purchase order request documents, and have this available to trigger from the model-driven app.

This lab will take approximately 60 minutes to complete.

## Exercise 1: Create Purchase Order Table

TBC

## Exercise 2: Customise the Account and Contact Tables

TBC

## Exercise 3: Create the Model-Driven App

TBC

## Exercise 4: Add Test Records

TBC

## Exercise 5: Integrate with ERP API

TBC

## Exercise 6: Create Cloud Flow for Document Creation

TBC