# Lab 0 - Configure Lab Environment

In this lab, you will configure and validate the environment that will be used to complete all subsequent lab exercises.

## Scenario

Coho Winery is a distributor and exporter of fine wine, within the European Union and North America. The company employees 600 people across different countries, and has been using the Microsoft Power Platform for several years. SharePoint Online is used as the central document repository tool for all regions. The company uses a bespoke Enterprise Resource Planning (ERP) system for the food and beverage industry. The ERP system has a public facing REST API, that allows consumers to retrieve purchase order information from vendors.

You have recently joined Coho Winery as a Power Platform developer, and you have been instructed to configure your initial environments, publishers and solution, to prepare yourself for the first project you will be involved in. 

## Instructions

In this lab, you will do the following:

- Redeem your [Developer plan license for Power Apps](https://learn.microsoft.com/en-us/power-platform/developer/plan), to create an environment to build your solution - this will be your **Development** environment.
- Setup an environment to deploy your solution - this will be your **Production** environment.
- Create a publisher and solution to store your components.

This lab will take approximately 15 minutes to complete.

> [!IMPORTANT]
> Your admin may have disabled the ability to create a Developer environment on your work tenant. If you encounter any error while attempting to create your developer environment, please reach out to them for further assistance or speak to your instructors for further assistance.

## Exercise 1: Create a Developer Environment

[Developer environments](https://learn.microsoft.com/en-us/power-platform/developer/create-developer-environment) allow for any Microsoft 365 user (subject to tenant level restrictions) to create up to three environments for personal development, testing and other non-production purposes. Each developer environment comes with up to 2GB of Dataverse storage, and allows you to create apps, automations and more.

1. Navigate to the [Power Apps Developer Plan page](https://www.microsoft.com/en-us/power-platform/products/power-apps/free) and click on **Start Free**:

    ![](Images/Lab0-ConfigureLabEnvironment/E1_1.png)

2. On the **Build apps with the free Power Apps Developer plan** dialog, enter your email address, tick the consent statement and then click on **Start free**:
    
    ![](Images/Lab0-ConfigureLabEnvironment/E1_2.png)

3. When prompted, sign in using your work / Microsoft 365 credentials.

4. You will be automatically redirected to the [Power Apps Maker Portal](https://make.powerapps.com). This may take several minutes to complete.

5. Once the Maker portal loads, a new development environment will have been created for you automatically and will have loaded. You can validate this by checking the following:
   - A banner message reading **This is a developer environment and not meant for production use** is visible on the screen.
   - When selecting the list of Environments, the current environment is shown as **\<Your Name\>'s Environment**.

    ![](Images/Lab0-ConfigureLabEnvironment/E1_3.png)

> [!IMPORTANT]
> In all future steps, we will refer to this environment as the **Development** environment. You will use this environment to build your solution.

6. Leave this browser tab open, as you will return here in Exercise 3.

## Exercise 2: Create a Production Environment

1. Open a new browser tab and navigate to the [Power Platform Admin Center](https://aka.ms/ppac). If prompted, sign-in again using your work / Microsoft 365 credentials.

2. If you are greeted with a **Welcome to the new Power Platform Admin Center** dialog, dismiss it by selecting **X**.

    ![](Images/Lab0-ConfigureLabEnvironment/E2_1.png)

3. In the left navigation pane, select **Manage**.

    ![](Images/Lab0-ConfigureLabEnvironment/E2_2.png)

4. In the **Environments** section, select **+ New**.

    ![](Images/Lab0-ConfigureLabEnvironment/E2_3.png)

5. In the **New environment** dialog, enter the following details. Leave all other settings as default, and then select **Next**:
    - **Name**: Production
    - **Type**: Developer
    
     ![](Images/Lab0-ConfigureLabEnvironment/E2_4.png)

6. In the **Add Dataverse** dialog, select **Save** to begin creating the environment.

    ![](Images/Lab0-ConfigureLabEnvironment/E2_5.png)

7. The environment creation process may take several minutes to complete. Press the **Refresh** button in the top right corner of the screen until the environment status changes from **Preparing** to **Running**.

    ![](Images/Lab0-ConfigureLabEnvironment/E2_6.png)

    ![](Images/Lab0-ConfigureLabEnvironment/E2_7.png)

## Exercise 3: Create a Publisher and Solution

TBC

**Congratulations, you've finished Lab 0** 🥳