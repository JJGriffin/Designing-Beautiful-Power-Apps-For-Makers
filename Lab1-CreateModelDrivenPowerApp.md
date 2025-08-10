# Lab 1 - Create Model-Driven Power App

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
- A [custom connector](https://learn.microsoft.com/en-us/connectors/custom-connectors/) to connect to the ERP API easily from a cloud flow and the custom page.

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

1. Navigate to the [Power Apps Maker portal](https://make.powerapps.com) and ensure you are in the **Developer** environment you created in Lab 0.
2. Select **Solutions** from the left navigation pane.

![Images/Lab1-CreateModelDrivenPowerApp/E1_1.png](Images/Lab1-CreateModelDrivenPowerApp/E1_1.png)

3. Select the **Coho Winery** solution you created in Lab 0.

![Images/Lab1-CreateModelDrivenPowerApp/E1_2.png](Images/Lab1-CreateModelDrivenPowerApp/E1_2.png)

4. In the solution, select **New** > **Table** -> **Table (advanced properties)** from the command bar.

![Images/Lab1-CreateModelDrivenPowerApp/E1_3.png](Images/Lab1-CreateModelDrivenPowerApp/E1_3.png)

5. In the **Create table** dialog, enter the following details. You may need to select **Advanced options** to see all fields:
   - **Display name**: `Purchase Order`
   - **Plural display name**: `Purchase Orders`
   - **Description**: `Table to store purchase order requests.`
   - **Name**: `purchaseorder`
   - **Type**: Standard
   - **Record Ownership**: User or team

![Images/Lab1-CreateModelDrivenPowerApp/E1_4.png](Images/Lab1-CreateModelDrivenPowerApp/E1_4.png)

6. Select the **Primary column** tab and enter the following details. You may need to select **Advanced options** to see all fields:
   - **Display name**: `Purchase Order Number`
   - **Description**: `Internal reference number for the purchase order.`
   - **Name**: `purchaseordernumber`
   - **Column Requirement**: Optional
   - **Maximum Character Count**: `10`

![Images/Lab1-CreateModelDrivenPowerApp/E1_5.png](Images/Lab1-CreateModelDrivenPowerApp/E1_5.png)

7. Select **Save** to create the table.

![Images/Lab1-CreateModelDrivenPowerApp/E1_6.png](Images/Lab1-CreateModelDrivenPowerApp/E1_6.png)

8. Once the table is created, you will be taken to the table designer. Our first step is to enable the autonumbering for the tables primary column, because it's not possible to do this on create. Select **Columns**.

![Images/Lab1-CreateModelDrivenPowerApp/E1_7.png](Images/Lab1-CreateModelDrivenPowerApp/E1_7.png)

9. In the **Columns** tab, select the **Purchase Order Number** column.

![Images/Lab1-CreateModelDrivenPowerApp/E1_8.png](Images/Lab1-CreateModelDrivenPowerApp/E1_8.png)

10. On the **Edit columns** pane, change the **Data type** to **Autonumber** and then update the fields as follows. When you are finished, click **Save**:
    - **Autonumber type**: String prefixed number
    - **Prefix**: Use your initials or another unique 3 character prefix
    - **Minimum number of digits**: `7`
    - **Seed**: `1`

![Images/Lab1-CreateModelDrivenPowerApp/E1_9.png](Images/Lab1-CreateModelDrivenPowerApp/E1_9.png)

11. We will now proceed to create the additional columns needed for the table. The table below outlines all of the columns we will need:

| Display Name | Name | Data Type | Required | Description |
|-------|-----|-----------|----------|-------------|
| Requested By | requestedby | Lookup (User) | Business Required | The user who requested the purchase order. |
| Requested Date | requesteddate | Date and Time | Business Required | The date the purchase order was requested. |
| Approved By | approvedby | Lookup (User) | Optional | The user who approved the purchase order. |
| Approved Date | approveddate | Date and Time | Optional | The date the purchase order was approved. |
| Value | value | Currency | Optional | The total value of the purchase order. |
| Description | description | Multiple lines of text | Optional | A description of the purchase order. |
| Account | account | Lookup (Account) | Business Required | The account associated with the purchase order. |
| Contact | contact | Lookup (Contact) | Business Required | The contact associated with the purchase order. |
| ERP ID | erpid | Single line of text | Optional | The ID of the purchase order in the ERP system. |

12. Let's begin by creating the **Requested By** column. In the **Columns** page, select **+ Add column**.

![Images/Lab1-CreateModelDrivenPowerApp/E1_10.png](Images/Lab1-CreateModelDrivenPowerApp/E1_10.png)

13. In the **Add column** pane, enter the following details and then press **Save**. You may need to select **Advanced options** to see all fields:
    - **Display name**: `Requested By`
    - **Description**: `The user who requested the purchase order.`
    - **Data type**: Lookup --> Lookup
    - **Column Requirement**: Business required
    - **Related table**: User
    - **Schema name**: `requestedby`
    - **Relationship name**: `purchaseorder_systemuser_requestedby`

![Images/Lab1-CreateModelDrivenPowerApp/E1_11.png](Images/Lab1-CreateModelDrivenPowerApp/E1_11.png)

14. Repeat step 13 for the remaining columns. For the following columns, use the following **Relationship name** values:
    - **Approved By**: purchaseorder_systemuser_approvedby
    - **Account**: purchaseorder_account
    - **Contact**: purchaseorder_contact

15. When you are finished, your **Purchase Order** table column list should resemble the below.

![Images/Lab1-CreateModelDrivenPowerApp/E1_12.png](Images/Lab1-CreateModelDrivenPowerApp/E1_12.png)

16. We will now add some custom status reason values to the **Purchase Order** table. Remaining in the **Columns** tab, select the **Status Reason** column.

![Images/Lab1-CreateModelDrivenPowerApp/E1_13.png](Images/Lab1-CreateModelDrivenPowerApp/E1_13.png)

17. In the **Edit column** pane, change the **Active** value to **Draft** and then select **+ New choice**.

![Images/Lab1-CreateModelDrivenPowerApp/E1_14.png](Images/Lab1-CreateModelDrivenPowerApp/E1_14.png)

18. Populate the label for the new choice as **Submitted**.

![Images/Lab1-CreateModelDrivenPowerApp/E1_15.png](Images/Lab1-CreateModelDrivenPowerApp/E1_15.png)

19. Click on the chevron next to **Active (1 of 2)** and select **Inactive (2 of 2)**.

![Images/Lab1-CreateModelDrivenPowerApp/E1_16.png](Images/Lab1-CreateModelDrivenPowerApp/E1_16.png)

20. Change the **Inactive** value to **Approved** and then select **+ Add status reason**. Populate the label for the new choice as **Rejected**. Click **Save** to save the changes.

![Images/Lab1-CreateModelDrivenPowerApp/E1_17.png](Images/Lab1-CreateModelDrivenPowerApp/E1_17.png)

21. Click on **Advanced** -> **Publish table** in the command bar to ensure all column changes are saved and published. The publishing process may take a few minutes to complete.

![Images/Lab1-CreateModelDrivenPowerApp/E1_18.png](Images/Lab1-CreateModelDrivenPowerApp/E1_18.png)

22. In the **Objects** pane, select **Forms** under the **Purchase Order** table.

![Images/Lab1-CreateModelDrivenPowerApp/E1_19.png](Images/Lab1-CreateModelDrivenPowerApp/E1_19.png)

23. In the **Forms** tab, select the **Information** main form.

![Images/Lab1-CreateModelDrivenPowerApp/E1_20.png](Images/Lab1-CreateModelDrivenPowerApp/E1_20.png)

24. In the form designer, drag the **Owner** column into the header to reposition it accordingly.

![Images/Lab1-CreateModelDrivenPowerApp/E1_21.png](Images/Lab1-CreateModelDrivenPowerApp/E1_21.png)

![Images/Lab1-CreateModelDrivenPowerApp/E1_22.png](Images/Lab1-CreateModelDrivenPowerApp/E1_22.png)

25. From the **Table columns** list, drag and drop the following columns directly below the **Purchase Order Number** field. Position them as you desire:
    - Requested By
    - Requested Date
    - Approved By
    - Approved Date
    - Value
    - Description
    - Account
    - Contact
    - ERP ID

![Images/Lab1-CreateModelDrivenPowerApp/E1_23.png](Images/Lab1-CreateModelDrivenPowerApp/E1_23.png)

26. Your form should look similar to the below. When you are finished, click on **Save and publish**. The process may take a few minutes to complete.

![Images/Lab1-CreateModelDrivenPowerApp/E1_24.png](Images/Lab1-CreateModelDrivenPowerApp/E1_24.png)

27. Once the form is saved and published, click on **Back** to return the **Purchase Order** table designer.

![Images/Lab1-CreateModelDrivenPowerApp/E1_25.png](Images/Lab1-CreateModelDrivenPowerApp/E1_25.png)

28. We have now finished customizing the **Purchase Order** table. Keep the **Coho Winery PP Solution** solution open, as we will continue to work on it in the next exercise.

## Exercise 2: Customise the Account and Contact Tables

We want to make it easy for users of our app to see a list of all related purchase orders for a company or individual. To do this, we will add a subgrid to the **Account** and **Contact** forms that displays this data.

1. In the **Coho Winery PP Solution** solution, select the **Account** table from the **Objects** pane. You may need to expand the **Tables** section to see it.

![Images/Lab1-CreateModelDrivenPowerApp/E2_1.png](Images/Lab1-CreateModelDrivenPowerApp/E2_1.png)

2. Under the **Data experience** section, select **Forms**.

![Images/Lab1-CreateModelDrivenPowerApp/E2_2.png](Images/Lab1-CreateModelDrivenPowerApp/E2_2.png)

3. On the **Forms** tab, select **Add existing form**.

![Images/Lab1-CreateModelDrivenPowerApp/E2_3.png](Images/Lab1-CreateModelDrivenPowerApp/E2_3.png)

4. In the **Add existing form** dialog, select the **Account** main form and click **Add**.

![Images/Lab1-CreateModelDrivenPowerApp/E2_4.png](Images/Lab1-CreateModelDrivenPowerApp/E2_4.png)

5. In the **Forms** tab, select the **Account** main form.

![Images/Lab1-CreateModelDrivenPowerApp/E2_5.png](Images/Lab1-CreateModelDrivenPowerApp/E2_5.png)

6. In the form designer, select the **Components** icon in the left pane.

![Images/Lab1-CreateModelDrivenPowerApp/E2_6.png](Images/Lab1-CreateModelDrivenPowerApp/E2_6.png)

7. In the **Components** pane, drag and drop the **1-Column tab** into the form header, directly after the **Details** tab.

![Images/Lab1-CreateModelDrivenPowerApp/E2_7.png](Images/Lab1-CreateModelDrivenPowerApp/E2_7.png)

8. With the new tab selected, in the **Details** pane on the right, configure the following properties:
   - **Label**: `Purchase Orders`
   - **Name**: `tab_purchaseorders`
   - **Expand this tab by default**: Untick

![Images/Lab1-CreateModelDrivenPowerApp/E2_8.png](Images/Lab1-CreateModelDrivenPowerApp/E2_8.png)

9. With the **Purchase Orders** tab selected, click on the **New section** section and configure the following properties:
   - **Label**: `Related Purchase Orders`
   - **Name**: `tab_purchaseorders_section_pos`
   - **Hide label**: Tick

![Images/Lab1-CreateModelDrivenPowerApp/E2_9.png](Images/Lab1-CreateModelDrivenPowerApp/E2_9.png)

10. From the **Components** pane, drag and drop the **Subgrid** component into the **Related Purchase Orders** section.

![Images/Lab1-CreateModelDrivenPowerApp/E2_10.png](Images/Lab1-CreateModelDrivenPowerApp/E2_10.png)

11. In the **Select subgrid views** dialog, select the following options and then click **Done**:
    - **Show related records**: Tick
    - **Table**: Select **Purchase Orders (Account)**
    - **Default view**: Select **Active Purchase Orders**

![Images/Lab1-CreateModelDrivenPowerApp/E2_11.png](Images/Lab1-CreateModelDrivenPowerApp/E2_11.png)

12. In the **Subgrid** properties pane on the right, configure the following properties:
    - **Label**: `Related Purchase Orders`
    - **Name**: `subgrid_purchaseorders`
    - **Hide label**: Untick

![Images/Lab1-CreateModelDrivenPowerApp/E2_12.png](Images/Lab1-CreateModelDrivenPowerApp/E2_12.png)

13. Click on **Save and publish** in the command bar to save your changes. It may take several minutes for the changes to be published.

![Images/Lab1-CreateModelDrivenPowerApp/E2_13.png](Images/Lab1-CreateModelDrivenPowerApp/E2_13.png)

14. Once the form is saved and published, click on **Back** to return to the **Account** table designer.

![Images/Lab1-CreateModelDrivenPowerApp/E2_14.png](Images/Lab1-CreateModelDrivenPowerApp/E2_14.png)

15. Repeat steps 1-14 for the **Contact** table, making sure you use the **Contact** main form. The form should resemble the below when you are finished.

![Images/Lab1-CreateModelDrivenPowerApp/E2_15.png](Images/Lab1-CreateModelDrivenPowerApp/E2_15.png)

16. Returning back to the **Coho Winery PP Solution** solution, click on **All** and then select **Publish all customizations** from the command bar to ensure all changes are published. This may take several minutes to complete.

![Images/Lab1-CreateModelDrivenPowerApp/E2_16.png](Images/Lab1-CreateModelDrivenPowerApp/E2_16.png)

17. Leave the **Coho Winery PP Solution** solution open, as we will continue to work on it in the next exercise.

## Exercise 3: Create the Model-Driven App

Our model-driven app will be used to display and edit purchase order information, including related customer information. We will also use it to provide a landing page for users to navigate to internal and external links, and display current data from the ERP system when we create our custom pages in the next lab.

1. In the **Coho Winery PP Solution** solution, select **+ New** > **App** > **Model-driven app** from the command bar.

![Images/Lab1-CreateModelDrivenPowerApp/E3_1.png](Images/Lab1-CreateModelDrivenPowerApp/E3_1.png)

2. In the **New model-driven app** dialog, provide the following details and then click **Create**. You may need to select **Advanced** to see all options:
   - **Name**: `Coho Winery Purchase Order Management`
   - **Description**: `Model-driven app for managing purchase orders`
   - **Use components from a custom solution**: Tick
    - **Solution**: Select the **Coho Winery PP Solution** solution

![Images/Lab1-CreateModelDrivenPowerApp/E3_2.png](Images/Lab1-CreateModelDrivenPowerApp/E3_2.png)

3. In the app designer, under the **Pages** tab, remove the **User** table by clicking the elipses (...) next to **User views** and selecting **Remove from app**.

![Images/Lab1-CreateModelDrivenPowerApp/E3_3.png](Images/Lab1-CreateModelDrivenPowerApp/E3_3.png)

4. In the "What You See Is What You Get" (WYSIWYG) designer, select the **+ Add page** button.

![Images/Lab1-CreateModelDrivenPowerApp/E3_4.png](Images/Lab1-CreateModelDrivenPowerApp/E3_4.png)

5. In the **Add page** dialog, click the **Table** option, select the following tables and then click **Add**. Make sure the **Show in navigation** option is ticked:
   - **Purchase Order**
   - **Account**
   - **Contact**

![Images/Lab1-CreateModelDrivenPowerApp/E3_5.png](Images/Lab1-CreateModelDrivenPowerApp/E3_5.png)

![Images/Lab1-CreateModelDrivenPowerApp/E3_6.png](Images/Lab1-CreateModelDrivenPowerApp/E3_6.png)

![Images/Lab1-CreateModelDrivenPowerApp/E3_7.png](Images/Lab1-CreateModelDrivenPowerApp/E3_7.png)

![Images/Lab1-CreateModelDrivenPowerApp/E3_8.png](Images/Lab1-CreateModelDrivenPowerApp/E3_8.png)

6. The tables will appear in the sitemap navigation, underneath a default **New group** sitemap group.

![Images/Lab1-CreateModelDrivenPowerApp/E3_9.png](Images/Lab1-CreateModelDrivenPowerApp/E3_9.png)

7. We will now proceed to reorganize the sitemap, so that it resembles the following structure:

   - **Home**
     - **Home Page** - This will be left empty for now, as we will add the custom page for this in the next lab.
   - **Customers**
     - **Accounts** 
     - **Contacts**
   - **Finance**
     - **Purchase Orders**
     - **PO Request Documents** - This will be left empty for now, as we will add the custom page for this in the next lab.

To start this process, select the **New group** group in the sitemap, expand the **New group** properties pane on the right, and then update the following properties:
   - **Title**: `Home`
   - **ID**: `group_home`

![Images/Lab1-CreateModelDrivenPowerApp/E3_10.png](Images/Lab1-CreateModelDrivenPowerApp/E3_10.png)

8. Click the ellipses (...) next to the **Home** group and select **New group**.

![Images/Lab1-CreateModelDrivenPowerApp/E3_11.png](Images/Lab1-CreateModelDrivenPowerApp/E3_11.png)

9. In the **New group** properties pane, update the following properties:
   - **Title**: `Customers`
   - **ID**: `group_customers`

![Images/Lab1-CreateModelDrivenPowerApp/E3_12.png](Images/Lab1-CreateModelDrivenPowerApp/E3_12.png)

10. Repeat steps 8-9 to create a new group called **Finance** with the following properties:
    - **Title**: `Finance`
    - **ID**: `group_finance`

![Images/Lab1-CreateModelDrivenPowerApp/E3_13.png](Images/Lab1-CreateModelDrivenPowerApp/E3_13.png)

11. Reorder the groups and the areas in the sitemap by clicking on the elipses (...) next to each group and selecting **Move up** or **Move down**. The sitemap should resemble the structure above and screenshots below when you are finished.

![Images/Lab1-CreateModelDrivenPowerApp/E3_14.png](Images/Lab1-CreateModelDrivenPowerApp/E3_14.png)

![Images/Lab1-CreateModelDrivenPowerApp/E3_15.png](Images/Lab1-CreateModelDrivenPowerApp/E3_15.png)

12. Click on **Save** in the command bar to save your changes, and then **Publish** to publish the app. The publishing process may take several minutes to complete.

![Images/Lab1-CreateModelDrivenPowerApp/E3_16.png](Images/Lab1-CreateModelDrivenPowerApp/E3_16.png)

13. Once the app is published, click on **Play** to open the app in a new tab.

![Images/Lab1-CreateModelDrivenPowerApp/E3_17.png](Images/Lab1-CreateModelDrivenPowerApp/E3_17.png)

14. Browse around the newly created app, ensuring you can navigate to the **Purchase Orders**, **Accounts**, and **Contacts** pages. You will see that all of the pages are empty, as we have not yet added any data to the system; we will do this in the next exercise.

![Images/Lab1-CreateModelDrivenPowerApp/E3_18.png](Images/Lab1-CreateModelDrivenPowerApp/E3_18.png)

15. Leave the **Coho Winery Purchase Order Management** app open, as we will continue to work on it in the next exercise.

## Exercise 4: Add Test Records

To ensure we can test our app successfully with the ERP API integration and document generation, we will add some test records to the **Purchase Order**, **Account**, and **Contact** tables.

1. In the **Coho Winery Purchase Order Management** app, navigate to the **Accounts** page and click on **New**.

![Images/Lab1-CreateModelDrivenPowerApp/E4_1.png](Images/Lab1-CreateModelDrivenPowerApp/E4_1.png)

2. In the **New Account** form, enter the following details and then click **Save & Close**:
   - **Account Name**: `Wingtip Toys`
   - **Phone**: `555-1234`
   - **Website**: `https://www.wingtiptoys.com`

![Images/Lab1-CreateModelDrivenPowerApp/E4_2.png](Images/Lab1-CreateModelDrivenPowerApp/E4_2.png)

3. Navigate to the **Contacts** page and click on **New**.

![Images/Lab1-CreateModelDrivenPowerApp/E4_3.png](Images/Lab1-CreateModelDrivenPowerApp/E4_3.png)

4. In the **New Contact** form, enter the following details and then click **Save & Close**:
   - **First Name**: `John`
   - **Last Name**: `Doe`
   - **Account Name**: Select the **Wingtip Toys** account you created earlier in this exercise.
   - **Email**: `john.doe@wingtiptoys.com`
   - **Business Phone**: `555-5678`

![Images/Lab1-CreateModelDrivenPowerApp/E4_4.png](Images/Lab1-CreateModelDrivenPowerApp/E4_4.png)

5. Navigate to the **Purchase Orders** page and click on **New**.

![Images/Lab1-CreateModelDrivenPowerApp/E4_5.png](Images/Lab1-CreateModelDrivenPowerApp/E4_5.png)

6. In the **New Purchase Order** form, enter the following details and then click **Save & Close**:
   - **Account**: Select the **Wingtip Toys** account you created earlier in this exercise.
   - **Contact**: Select the **John Doe** contact you created earlier in this exercise.
   - **Requested Date**: Select today's date and time.
   - **Value**: `2500`
   - **Description**: `Purchase order miniature toys representing wine bottles and grapes.`

![Images/Lab1-CreateModelDrivenPowerApp/E4_6.png](Images/Lab1-CreateModelDrivenPowerApp/E4_6.png)

7. Feel free to create additional test records in the **Purchase Order**, **Account**, and **Contact** tables as needed. When you are finished, close the browser tab.

## Exercise 5: Integrate with the ERP API

In this exercise, we will integrate our app with the ERP API to enable the creation and retrieval of purchase orders. This will be done by creating a custom connector that connects to the ERP API via a [Swagger definition](https://swagger.io/solutions/api-documentation/), which describes the two core operations of the API:

- **CreatePurchaseOrder**: This operation allows us to create a new purchase order in the ERP system.
- **RetrieveRemainingValue**: This operation allows us to retrieve the remaining value of a purchase order from the ERP system.

Once we have created the custom connector, we will then perform a test to ensure the connection is working correctly.

> [!IMPORTANT]
> The API key for the endpoint should have already been shared with you by your instructors. Ensure you have this key available before proceeding with the steps below.

1. Open a new browser tab and navigate to the following URL: https://beautifulappsformakers-functions.azurewebsites.net/api/swagger/ui

2. The Swagger UI will load, displaying the API documentation for the Coho Winery ERP API. You should see two operations: **CreatePurchaseOrder** and **RetrieveRemainingValue**. You can expand each operation to see the details, including the request and response formats.

![Images/Lab1-CreateModelDrivenPowerApp/E5_1.png](Images/Lab1-CreateModelDrivenPowerApp/E5_1.png)

![Images/Lab1-CreateModelDrivenPowerApp/E5_2.png](Images/Lab1-CreateModelDrivenPowerApp/E5_2.png)

2. On the top of the page, click on the URL hyperlink for the **swagger.json** file. This will open the Swagger JSON definition in a new tab.

![Images/Lab1-CreateModelDrivenPowerApp/E5_3.png](Images/Lab1-CreateModelDrivenPowerApp/E5_3.png)

![Images/Lab1-CreateModelDrivenPowerApp/E5_4.png](Images/Lab1-CreateModelDrivenPowerApp/E5_4.png)

3. Right-click on the page and select **Save as...** to save the Swagger JSON file to your local machine. Name the file `coho-winery-erp-api.json` and save it in a location you can easily access later.

![Images/Lab1-CreateModelDrivenPowerApp/E5_5.png](Images/Lab1-CreateModelDrivenPowerApp/E5_5.png)

4. Close the JSON file and Swagger UI tabs.

5. Navigate back to the [Power Apps Maker portal](https://make.powerapps.com) and ensure you are in the **Developer** environment you created in Lab 0. Navigate to the **Coho Winery PP Solution** solution.

6. In the solution, select **+ New** > **Automation** > **Custom connector**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_6.png](Images/Lab1-CreateModelDrivenPowerApp/E5_6.png)

7. On the **General information** page, populate the following details and then click **Create connector**:
   - **Connector name**: `Coho Winery ERP API`
   - **Host**: `beautifulappsformakers-functions.azurewebsites.net`

![Images/Lab1-CreateModelDrivenPowerApp/E5_7.png](Images/Lab1-CreateModelDrivenPowerApp/E5_7.png)

8. Once the connector has finished saving, click on the back icon.

![Images/Lab1-CreateModelDrivenPowerApp/E5_8.png](Images/Lab1-CreateModelDrivenPowerApp/E5_8.png)

9. On the **Custom connectors** page, click on the elipses (...) next to the **Coho Winery ERP API** connector and select **Update from OpenAPI file**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_9.png](Images/Lab1-CreateModelDrivenPowerApp/E5_9.png)

10. On the **Import an OpenAPI file** dialog, click on **Import** and select the `coho-winery-erp-api.json` file you saved earlier. Then click **Continue**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_10.png](Images/Lab1-CreateModelDrivenPowerApp/E5_10.png)

11. The connector will now be updated with the operations defined in the Swagger file. Click on **Update connector** to save the changes. Once the update is complete, click on **2. Security**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_11.png](Images/Lab1-CreateModelDrivenPowerApp/E5_11.png)

12. Review the **Security** page and confirm that the **Authentication type** is set to **API key**. Click on **3. Definition**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_12.png](Images/Lab1-CreateModelDrivenPowerApp/E5_12.png)

13. On the **Definition** page, verify that you can see the two operations: **CreatePurchaseOrder** and **RetrieveRemainingValue**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_13.png](Images/Lab1-CreateModelDrivenPowerApp/E5_13.png)

14. With the **CreatePurchaseOrder** operation selected, click on the **Import from sample** button under the **Request** section.

![Images/Lab1-CreateModelDrivenPowerApp/E5_14.png](Images/Lab1-CreateModelDrivenPowerApp/E5_14.png)

15. On the **Import from sample** pane, configure the following details and then click **Import**:
    - **Verb**: Select **POST**
    - **URL**: `https://beautifulappsformakers-functions.azurewebsites.net/api/CreatePurchaseOrder`
    - **Headers**: 
      - `Content-Type: application/json`

    - **Body**: 
      ```json
      {
        "ReferenceNumber": "PO1234567",
        "TotalValue": 2500.00
      }
      ```
![Images/Lab1-CreateModelDrivenPowerApp/E5_15.png](Images/Lab1-CreateModelDrivenPowerApp/E5_15.png)

16. Click on **Content-Type** under **Headers**, and select **Edit**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_16.png](Images/Lab1-CreateModelDrivenPowerApp/E5_16.png)

17. In the **Parameter** section, configure the following details and then click **Update connector**. This will ensure that this header value is always set correctly:
    - **Default value**: `application/json`
    - **Is required?**: Select **Yes**
    - **Visibility**: Select **internal**

![Images/Lab1-CreateModelDrivenPowerApp/E5_17.png](Images/Lab1-CreateModelDrivenPowerApp/E5_17.png)

18. We are now ready to test the connector. Click on **5. Test** at the top of the page.

![Images/Lab1-CreateModelDrivenPowerApp/E5_18.png](Images/Lab1-CreateModelDrivenPowerApp/E5_18.png)

19. In the **Test operation** section, click on **New connection**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_19.png](Images/Lab1-CreateModelDrivenPowerApp/E5_19.png)

20. A new browser tab will open, prompting you to enter the API key. Enter the API key provided by your instructors and click **Create connection**.

![Images/Lab1-CreateModelDrivenPowerApp/E5_20.png](Images/Lab1-CreateModelDrivenPowerApp/E5_20.png)

21. Close the browser tab to return to the previous page.

22. Click the refresh icon and then select the newly created connection from the dropdown list.

![Images/Lab1-CreateModelDrivenPowerApp/E5_21.png](Images/Lab1-CreateModelDrivenPowerApp/E5_21.png)

23. We will now proceed to test both operations, starting with the **CreatePurchaseOrder** operation, which should already be selected. If not, select it under the **Operations** heading and then enter the following details. Click on **Test operation** to run the test:
    - **ReferenceNumber**: Your initials followed by a hyphen and then seven 9's (e.g., `JD-9999999`)
    - **TotalValue**: `2500.00`

![Images/Lab1-CreateModelDrivenPowerApp/E5_22.png](Images/Lab1-CreateModelDrivenPowerApp/E5_22.png)

24. If the test is successful, you should see a 200 response similar to the following, which contains the Unique Identifier (GUID) of the newly created purchase order:
    ```json
    {
      "PurchaseOrderUID": "6f5febfe-6e5c-488e-9352-609249402116"
    }
    ```

![Images/Lab1-CreateModelDrivenPowerApp/E5_23.png](Images/Lab1-CreateModelDrivenPowerApp/E5_23.png)

25. Now, let's test the **RetrieveRemainingValue** operation. Click on the **RetrieveRemainingValue** operation under the **Operations** heading and enter the following details. Click on **Test operation** to run the test:
    - **ReferenceNumber**: The reference number used in step 23 (e.g., `JD-9999999`)

![Images/Lab1-CreateModelDrivenPowerApp/E5_24.png](Images/Lab1-CreateModelDrivenPowerApp/E5_24.png)

26. If the test is successful, you should see a 200 response similar to the following, which contains the remaining value of the purchase order. This is a randomly generated value for the purpose of this lab, and may differ from the example below:
    ```json
    {
      "remainingValue": 905
    }
    ```

![Images/Lab1-CreateModelDrivenPowerApp/E5_25.png](Images/Lab1-CreateModelDrivenPowerApp/E5_25.png)

27. Our custom connector is now successfully configured and tested. Click on **Update connector** for a final time to save the changes and then close the browser tab.

28. On the **Coho Winery PP Solution** solution page, click on **Done** and then verify that the custom connector has been added to the solution. The **Name** value may differ from the example below.

![Images/Lab1-CreateModelDrivenPowerApp/E5_26.png](Images/Lab1-CreateModelDrivenPowerApp/E5_26.png)

![Images/Lab1-CreateModelDrivenPowerApp/E5_27.png](Images/Lab1-CreateModelDrivenPowerApp/E5_27.png)

29. Click on **Publish all customizations** in the command bar to ensure all changes are published. This may take several minutes to complete.

30. Leave the **Coho Winery PP Solution** solution open, as we will continue to work in it during the next exercise.

## Exercise 6: Create Cloud Flow for Document Creation

TBC