
// Store the pane instance globally to reference it later for closing
var sidePaneInstance = null;

/**
 * Opens a side pane to view Purchase Order PDF
 * @param {string} pageName - The name of the custom page to navigate to
 * @param {string} recordId - The GUID of the Purchase Order record
 * @param {string} purchaseOrderNumber - The PO number for dynamic title (optional)
 */
function openPurchaseOrderPDFViewer(pageName, recordId, purchaseOrderNumber) {
    // If a pane is already open, close it before opening a new one
    if (sidePaneInstance) {
        sidePaneInstance.close();
        sidePaneInstance = null;
    }

    // Create dynamic title - use PO number if provided, otherwise generic title
    var paneTitle = purchaseOrderNumber 
        ? `Purchase Order ${purchaseOrderNumber} - PDF Viewer`
        : "Purchase Order - PDF Viewer";

    Xrm.App.sidePanes.createPane({
        title: paneTitle,
        imageSrc: "WebResources/mspp_content_snippets.svg", // Consider using a PDF or PO specific icon
        hideHeader: false, // Set to false to show the dynamic title
        canClose: true,
        width: 600
    }).then((pane) => {
        // Save the pane instance to use it for future actions (like closing)
        sidePaneInstance = pane;
        
        // Console log success with record ID
        console.log(`Successfully opened Purchase Order PDF viewer for record ID: ${recordId}`);
        
        // Navigate to the desired page in the pane with recordId
        pane.navigate({
            pageType: "custom",  
            name: pageName,
            recordId: recordId
        });
    }).catch((error) => {
        console.error("Error opening Purchase Order PDF viewer:", error);
        // Optional: Show user-friendly error message
        Xrm.Navigation.openAlertDialog({
            text: "Unable to open PDF viewer. Please try again.",
            title: "Error"
        });
    });
}

/**
 * Context-based function that gets record data dynamically
 * @param {string} pageName - The name of the custom page to navigate to
 * @param {string} fieldName - The field name to use for the dynamic title (e.g., "msdyn_name")
 */
// the called function from the command bar
function openPOViewer(pageName, fieldName) {
    // Get the current record context
    var formContext = Xrm.Page; // or pass as parameter if using modern approach
    var recordId = formContext.data.entity.getId();
    
    // Get the record name for dynamic title using the provided field name
    var recordNameAttribute = formContext.getAttribute(fieldName);
    var recordName = recordNameAttribute ? recordNameAttribute.getValue() : null;
    
    // Call the main function
    openPurchaseOrderPDFViewer(pageName, recordId, recordName);
}